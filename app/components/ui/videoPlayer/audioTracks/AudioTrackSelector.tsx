import React, { ChangeEventHandler, FC } from 'react';

interface AudioTrackSelectorProps {
	audioTracks: any[];
	selectedAudioTrack: number;
	onChange: (selectedTrack: number) => void;
}

const AudioTrackSelector: FC<AudioTrackSelectorProps> = ({ audioTracks, selectedAudioTrack, onChange }) => {
	const handleAudioTrackChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const selectedTrack = parseInt(e.target.value, 10);
		onChange(selectedTrack);
	};

	return (
		<select
			className={'absolute mt-10 ml-5 bg-gray-900 z-40'}
			value={selectedAudioTrack}
			onChange={handleAudioTrackChange}
		>
			{audioTracks.map((track: any, index: number) => (
				<option key={track.id} value={index} defaultChecked={track.default}>
					{track.name}
				</option>
			))}
		</select>
	);
};

export default AudioTrackSelector;
