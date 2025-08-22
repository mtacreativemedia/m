import React, { useState } from 'react';

function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${name}, status kehadiranmu: ${attending}`);
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-4">Konfirmasi Kehadiran</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <select
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded">Kirim</button>
      </form>
    </section>
  );
}

export default RSVPForm;
