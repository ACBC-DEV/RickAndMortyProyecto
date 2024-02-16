import { Characters } from "@components/Character";
type CharactersHomeProps = {
	searchParams: { page: string };
};
export default function CharactersHome({ searchParams }: CharactersHomeProps) {
	const { page } = searchParams;

	const pageInt = parseInt(page);
	return <Characters page={pageInt} />;
}
