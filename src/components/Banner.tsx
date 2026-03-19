'use client'

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";

const covers = [
  '/img/cover.jpg',
  '/img/cover2.jpg',
  '/img/cover3.jpg',
  '/img/cover4.jpg',
];

export default function Banner() {
  const [coverIndex, setCoverIndex] = useState(0);
  const router = useRouter();

  const handleImageClick = () => {
    setCoverIndex((prev) => (prev + 1) % covers.length);
  };

  return (
    <div className={styles.banner}>
      <Image
        src={covers[coverIndex]}
        alt="Banner background"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerImage}
        onClick={handleImageClick}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.description}>
          Finding the perfect venue has never been easier. Whether it&apos;s a wedding,
          corporate event, or private party, we connecting people to the perfect place.
        </p>
        <button
          onClick={() => router.push('/venue')}
          style={{
            marginTop: '1.5rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Select Venue
        </button>
      </div>
    </div>
  );
}
