'use client'

import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import DateReserve from '@/components/DateReserve'

export default function BookingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Venue Booking</h1>
      <form className="flex flex-col gap-6 mt-6 max-w-sm mx-auto">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />
        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" labelId="venue-label">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <button name="Book Venue" className="border border-gray-400 rounded px-4 py-2 text-black w-fit">Book Venue</button>
      </form>
    </main>
  )
}
