import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { DealForm } from '../../components/admin/DealForm';
import type { Deal } from '../../types/deal';

export function AdminDealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  useEffect(() => {
    loadDeals();
  }, []);

  async function loadDeals() {
    const { data } = await supabase.from('deals').select('*');
    if (data) setDeals(data);
  }

  function handleEdit(deal: Deal) {
    setSelectedDeal(deal);
    setIsFormOpen(true);
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this deal?')) {
      await supabase.from('deals').delete().eq('id', id);
      await loadDeals();
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display font-bold">Manage Deals</h1>
        <button
          onClick={() => {
            setSelectedDeal(null);
            setIsFormOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Deal
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deals.map((deal) => (
              <tr key={deal.id}>
                <td className="px-6 py-4">
                  {deal.from} → {deal.to}
                </td>
                <td className="px-6 py-4">€{deal.price}</td>
                <td className="px-6 py-4">{deal.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(deal)}
                    className="text-primary-600 hover:text-primary-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(deal.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <DealForm
          deal={selectedDeal}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedDeal(null);
          }}
          onSave={async () => {
            await loadDeals();
            setIsFormOpen(false);
            setSelectedDeal(null);
          }}
        />
      )}
    </div>
  );
}