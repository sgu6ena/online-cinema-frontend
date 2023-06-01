import { ChangeEvent, FC } from 'react'

interface FileInput {
	onChange: (file: File) => void;
}
const FileInput:FC<FileInput>  = ({ onChange }) => {
	const handleFileChange = (event:ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			onChange(file);
		}
	};

	return (
		<input type="file" onChange={handleFileChange} />
	);
};

export default FileInput;