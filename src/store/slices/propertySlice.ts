import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Property {
  id: string;
  name: string;
  address: string;
  units: number;
  occupancyRate: number;
}

interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  loading: boolean;
  error: string | null;
}

const initialState: PropertyState = {
  properties: [],
  selectedProperty: null,
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedProperty: (state, action: PayloadAction<Property>) => {
      state.selectedProperty = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addProperty: (state, action: PayloadAction<Property>) => {
      state.properties.push(action.payload);
    },
    updateProperty: (state, action: PayloadAction<Property>) => {
      const index = state.properties.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.properties[index] = action.payload;
      }
    },
    deleteProperty: (state, action: PayloadAction<string>) => {
      state.properties = state.properties.filter(p => p.id !== action.payload);
    },
  },
});

export const {
  setProperties,
  setSelectedProperty,
  setLoading,
  setError,
  addProperty,
  updateProperty,
  deleteProperty,
} = propertySlice.actions;

export default propertySlice.reducer;
