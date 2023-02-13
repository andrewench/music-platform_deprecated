import { ReactNode } from 'react';
import {
  IoPlayCircleOutline,
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoRepeatOutline,
  IoShuffleOutline,
} from 'react-icons/io5';

interface IAudioPlayerButtons {
  icon: ReactNode;
}

export const AudioPlayerButtons: IAudioPlayerButtons[] = [
  {
    icon: <IoShuffleOutline size={28} />,
  },
  {
    icon: <IoPlaySkipBackOutline size={28} />,
  },
  {
    icon: <IoPlayCircleOutline size={45} className="play" />,
  },
  {
    icon: <IoPlaySkipForwardOutline size={28} />,
  },
  {
    icon: <IoRepeatOutline size={28} />,
  },
];
