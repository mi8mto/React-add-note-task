import { Header } from './Header';
import { MyModule } from './MyModule';

export const App = () => {
	return (
		<div>
			{<Header />}
			{<MyModule />}
		</div>
	);
};
