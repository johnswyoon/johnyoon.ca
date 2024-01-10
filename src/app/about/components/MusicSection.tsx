'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Song = {
  title: string;
  album: string;
  artist: string;
  image: string;
  url: string;
};

const songList: Song[] = [
  {
    title: '같애 (feat. SHIRT)',
    album: 'You Might (feat. SHIRT)',
    artist: 'g0nny (거니), SHIRT',
    image:
      'https://images.genius.com/62bb55d045736f0c80fd43cecfe5efa3.1000x1000x1.png',
    url: 'https://open.spotify.com/track/340yvMO5adu3bo1x5Zrw14?si=9a200fa62b83464e',
  },
  {
    title: 'Say love in words, not love',
    album: 'Say love in words, not love',
    artist: 'siso',
    image: 'https://i.scdn.co/image/ab67616d0000b2731f1333f2baeadb12b599d45d',
    url: 'https://open.spotify.com/track/5H8LiMJcD5Kuxj4A3mrkh4?si=411af3339b404a46',
  },
  {
    title: 'Oncle Jazz',
    album: 'Oncle Jazz',
    artist: 'Men I Trust',
    image:
      'https://images.genius.com/34ed474ecfe7cd7a6dad1db0c762eb12.1000x1000x1.jpg',
    url: 'https://open.spotify.com/track/204t5SErksNRHRhU52g5JF?si=27fb026bda094c87',
  },
  {
    title: 'After Last Night',
    album: 'An Evening with Silk Sonic',
    artist: 'Bruno Mars, Anderson .Paak, Silk Sonic',
    image:
      'https://images.genius.com/77981e411ef0855dea70b61f07982338.300x300x1.jpg',
    url: 'https://open.spotify.com/track/6jGAh1bFnXt1Muj9zeHveZ?si=3f52dcfdeb294674',
  },
];

export default function MusicSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Currently listening to...</h2>
      <div>
        {songList.map((song) => {
          return <SongCard key={song.url} {...song} />;
        })}
      </div>
    </div>
  );
}

function SongCard({ title, album, artist, image, url }: Song) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className="m-4 flex items-center">
          <Image
            src={image}
            className="m-1 rounded-xl"
            style={{ boxShadow: '0 0px 10px -3px rgba(0, 0, 0, 0.4)' }}
            height={125}
            width={125}
            alt={`${title} - ${artist}`}
          />
          <div className="ml-4">
            <p>
              <strong>{title}</strong>
            </p>
            <p>{album}</p>
            <p>{artist}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
