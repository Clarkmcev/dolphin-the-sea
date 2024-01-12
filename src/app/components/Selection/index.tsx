import React from 'react';
import { songs } from '../../../../data/dummyData';
import SongRow from './Row';

interface Props {
  selection: number;
  toggleSelection: (id: number) => void;
}

function Selection({ selection, toggleSelection }: Props) {
  return (
    <div className="w-full overflow-auto overflow-y-auto h-full">
      {songs.map((song: any, i: any) => (
        <SongRow
          id={i}
          isActive={selection === i}
          toggleSelection={toggleSelection}
          key={i}
          song={song}
        />
      ))}
    </div>
  );
}

export default Selection;
