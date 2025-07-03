import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import {currentUser} from "@clerk/nextjs/server";

const Page = async () => {
    const companions = await getAllCompanions({limit: 3});
    const recentSessionCompanions = await getRecentSessions();
    const user = await currentUser();
    const usersId = companions?.filter(companion => user?.id === companion.author);

    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>
            <section className="home-section-1 border-b-1 border-black pb-4">
                {usersId.length ?
                    (
                        usersId.map(companion => (
                            <CompanionCard
                                key={companion.id}
                                {...companion}
                                color={getSubjectColor(companion.subject)}
                            />
                        ))
                    ) : (
                        <p>No companions found.</p>
                    )
                }
            </section>
            <section className="home-section-2">
                <CompanionsList
                title="Recently completed lessons"
                companions={recentSessionCompanions}
                classNames="w-2/3 max-lg:w-full"/>

                <CTA />
            </section>
        </main>
    );
};


export default Page;
