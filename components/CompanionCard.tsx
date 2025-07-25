"use client";

import {usePathname} from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import {addBookmark, removeBookmark} from "@/lib/actions/companion.actions";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
    bookmarked: boolean;
}

function CompanionCard({id, name, topic, subject, duration, color, bookmarked}: CompanionCardProps) {
    const pathname = usePathname();
    const handleBookmark = async () => {
        if (bookmarked) {
            await removeBookmark(id, pathname);
        } else {
            await addBookmark(id, pathname);
        }
    };
    return (
        <article className="companion-card flex flex-col gap-2.5 p-4 rounded-lg shadow-lg" style={{backgroundColor: color}}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark" onClick={handleBookmark}>
                    <Image src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
                      alt="bookmark"
                      width={12.5}
                      height={15}
                    />
                </button>
            </div>
            <h2 className="text-2x font-bold">{name}</h2>
            <p className="text-sm">Topic: {topic}</p>
            <div className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
                <p className="text-sm">{duration} minutes duration</p>
            </div>
            <Link href={`/companions/${id}`} className="w-full">
                <button className="btn-primary w-full justify-center">
                    Launch Lesson
                </button>
            </Link>
        </article>
    );
}

export default CompanionCard;