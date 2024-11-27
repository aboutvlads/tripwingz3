export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      deals: {
        Row: {
          id: string
          from: string
          to: string
          price: number
          date: string
          imageUrl: string
          airline: string
          departureTime: string
          arrivalTime: string
          duration: string
          bookingUrl: string
          description: string
          highlights: string[]
          stops: 'direct' | '1 stop'
          foundBy: string
          validUntil: string
          baggage: string
          travelDates: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['deals']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['deals']['Insert']>
      }
      profiles: {
        Row: {
          id: string
          is_admin: boolean
          created_at: string
        }
        Insert: {
          id: string
          is_admin: boolean
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
    }
  }
}