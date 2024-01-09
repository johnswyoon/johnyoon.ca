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
    title: 'Psychic',
    album: 'Breezy',
    artist: 'Christ Brown feat. Jack Harlow',
    image:
      'https://images.genius.com/3600e8f28bf7872aa01458bb8928e904.1000x1000x1.jpg',
    url: 'https://open.spotify.com/track/64pUytZWfCpeeMBN0XAadF?si=76d9662199a54819',
  },
  {
    title: 'Calico',
    album: 'Moodswings In To Order',
    artist: 'DPR Ian',
    image:
      'https://images.genius.com/fd47398ef1d935e4a3d23d15567c1b10.1000x1000x1.png',
    url: 'https://open.spotify.com/track/6rgMOrZmsa3eKZfRSw1587?si=b40bd8e55e8245ad',
  },
  {
    title: '너는 어떻게',
    album: '너는 어떻게',
    artist: '구원찬 feat. 백예린',
    image: 'https://i.scdn.co/image/ab67616d00001e02635d8a452f469f726e99bd5e',
    url: 'https://open.spotify.com/track/2mVb3RIBLffHQsauvkHBuf?si=47f89cf88faf41e6',
  },
  {
    title: 'No Fear No More (Remix)',
    album: 'No Fear No More (Remix)',
    artist: 'Madeon, EARTHGANG',
    image: 'https://i1.sndcdn.com/artworks-RFj6QL0x9mZL-0-t500x500.jpg',
    url: 'hhttps://open.spotify.com/track/36X1P3v7N1dv06bh2aPtMF?si=ac515dfbf0644d92',
  },
];

export default function MusicSection() {
  return (
    <div>
      <h2>Currently listening to...</h2>
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
  );
}
