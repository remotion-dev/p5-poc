import {Composition} from 'remotion';
import {Demo} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={Demo}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
