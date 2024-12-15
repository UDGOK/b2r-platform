import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lease {
  id: string;
  propertyId: string;
  unitId: string;
  tenantName: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  status: 'active' | 'pending' | 'expired';
}

interface LeaseState {
  leases: Lease[];
  selectedLease: Lease | null;
  loading: boolean;
  error: string | null;
}

const initialState: LeaseState = {
  leases: [],
  selectedLease: null,
  loading: false,
  error: null,
};

const leaseSlice = createSlice({
  name: 'lease',
  initialState,
  reducers: {
    setLeases: (state, action: PayloadAction<Lease[]>) => {
      state.leases = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedLease: (state, action: PayloadAction<Lease>) => {
      state.selectedLease = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addLease: (state, action: PayloadAction<Lease>) => {
      state.leases.push(action.payload);
    },
    updateLease: (state, action: PayloadAction<Lease>) => {
      const index = state.leases.findIndex(l => l.id === action.payload.id);
      if (index !== -1) {
        state.leases[index] = action.payload;
      }
    },
    deleteLease: (state, action: PayloadAction<string>) => {
      state.leases = state.leases.filter(l => l.id !== action.payload);
    },
  },
});

export const {
  setLeases,
  setSelectedLease,
  setLoading,
  setError,
  addLease,
  updateLease,
  deleteLease,
} = leaseSlice.actions;

export default leaseSlice.reducer;
