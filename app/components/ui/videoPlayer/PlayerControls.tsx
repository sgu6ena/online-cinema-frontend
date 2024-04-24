import React, { ChangeEventHandler, FC, useState } from 'react'
import PlayPauseButton from '@/ui/videoPlayer/playPause/playPauseButton';
import TimeDisplay from '@/ui/videoPlayer/TimeDisplay/TimeDisplay';
import Volume from '@/ui/videoPlayer/volume/volume';
import FullScreenButton from '@/ui/videoPlayer/FullScreenButton/FullScreenButton';
import SeekBar from '@/ui/videoPlayer/SeekBar/SeekBar';
import ReactPlayer from 'react-player'
import cn from 'classnames'

interface PlayerControlsProps {
	playing: boolean;
	togglePlaying: () => void;
	currentTime: number;
	duration: number;
	isAudioChange: boolean;
	selectedAudioTrack: number;
	changeAudio: ChangeEventHandler<HTMLSelectElement>;
	volume: number;
	setVolume: (volume: number) => void;
	videoRef: React.RefObject<ReactPlayer>;
	progressTime: number;
	setProgressTime: (progressTime: number) => void;
	setCurrentTime: (currentTime: number) => void;
	isVisible:boolean
}

const PlayerControls: FC<PlayerControlsProps> = ({ isVisible,
																												 playing,
																												 togglePlaying,
																												 currentTime,
																												 duration,
																												 isAudioChange,
																												 selectedAudioTrack,
																												 changeAudio,
																												 volume,
																												 setVolume,
																												 videoRef,
																												 progressTime,
																												 setProgressTime,
																												 setCurrentTime,
																											 }) => {



	return (
		<div className={cn('px-2.5 z-70 animate-fade absolute bottom-2 left-0 right-0', isVisible?'opacity-100':'opacity-0')}  >
				<div className='flex w-full items-center z-70 justify-between'>
				<div className={'flex gap-2 justify-start'}>
					<PlayPauseButton playing={playing} togglePlaying={togglePlaying} />
					<TimeDisplay currentTime={currentTime} duration={duration} />
					{isAudioChange && (
						<select
							className={' bg-gray-900 leading-none  z-40'}
							value={selectedAudioTrack}
							onChange={changeAudio}
						>
							{videoRef.current?.getInternalPlayer('hls')?.audioTracks.map((track: any, index: number) => (
								<option key={track.id} className={'m-0'} value={index} defaultChecked={track.default}>
									{track.name}
								</option>
							))}
						</select>
					)}
				</div>
				<div className={'flex gap-2 justify-end'}>
					<Volume videoRef={videoRef} setVolume={setVolume} volume={volume} />
					<FullScreenButton />
				</div>
			</div>

			<SeekBar
				currentTime={currentTime}
				progressTime={progressTime}
				setProgressTime={setProgressTime}
				duration={duration}
				onSeek={setCurrentTime}
				videoRef={videoRef}
			/>
		</div>
	);
};

export default PlayerControls;
