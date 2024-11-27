import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Deal } from '../../types/deal';

interface DealFormProps {
  deal?: Deal | null;
  onClose: () => void;
  onSave: () => void;
}

export function DealForm({ deal, onClose, onSave }: DealFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Deal>({
    defaultValues: deal || {
      stops: 'direct',
    },
  });

  async function onSubmit(data: Deal) {
    if (deal) {
      await supabase.from('deals').update(data).eq('id', deal.id);
    } else {
      await supabase.from('deals').insert(data);
    }
    onSave();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display font-bold">
            {deal ? 'Edit Deal' : 'Add New Deal'}
          </h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input
                {...register('from', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input
                {...register('to', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                {...register('price', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                {...register('date', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              {...register('imageUrl', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stops</label>
            <select
              {...register('stops')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="direct">Direct</option>
              <option value="1 stop">1 Stop</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
            >
              {deal ? 'Update Deal' : 'Add Deal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}