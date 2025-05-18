import { OrganizationHeader } from "@/components/organisms/OrganizationHeader";
import { FineTuningCard } from "@/components/organisms/FineTuningCard";
import { GettingStartedCard } from "@/components/organisms/GettingStartedCard";

export default function Home() {
	return (
		<main className="grid grid-cols-12 gap-4 py-8 px-6">
			<OrganizationHeader />
			<FineTuningCard />
			<GettingStartedCard />
		</main>
	);
}
