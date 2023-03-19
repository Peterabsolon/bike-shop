export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      brands: {
        Row: {
          data: Json | null
          id: number
          inserted_at: string
          name: string | null
          updated_at: string
        }
        Insert: {
          data?: Json | null
          id?: number
          inserted_at?: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          data?: Json | null
          id?: number
          inserted_at?: string
          name?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      bike_category: 'road' | 'gravel' | 'xc' | 'all-mountain' | 'trail' | 'enduro' | 'downhill' | 'bmx' | 'other'
      brake_type: 'disc-hydraulic' | 'disc-mechanical' | 'rim'
      condition: 'brand-new' | 'perfect' | 'very-good' | 'good' | 'OK'
      drive_type: 'manual' | 'electric'
      suspension: 'full' | 'front' | 'none'
      wheel_size: '26"' | '27.5"' | '29"'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
