import Image from "next/image";
import Link from "next/link";
import { sortedListPortfolio } from "@/database/database";

export default function ListPortfolio() {
  return (
    <div className="container mx-auto my-10 px-5">
      <div className="paper-portfolio">
        <header>
          <section className="flex items-center justify-center gap-5">
            <div className="h-fit w-fit">
              <h2 className="text-4xl font-semibold">
                PORTFOL<span className="text-red-600">IO</span>
              </h2>
              <p className="text-end text-lg font-semibold">- DIZETO -</p>
            </div>
            <div className="h-0.5 w-full bg-red-600" />
          </section>
        </header>

        <main className="flex items-start justify-center">
          <div className="grid grid-cols-2 gap-5 sm:md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sortedListPortfolio.map((data, index) => (
              <Link key={data.id} href={`/listportfolio/${data.link}`}>
                <div className="h-fit w-fit rounded-lg border-2 bg-white p-3 hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600">
                  <Image
                    src={require(`@/assets/images/thumbnail/portfolio/${data.image}`)}
                    alt="Test"
                    height={300}
                    width={0}
                    quality={50}
                    placeholder="blur"
                    className="rounded-md"
                  />
                  <div className="mx-auto my-3 h-0.5 w-24 rounded-full bg-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-600">{data.title}</h4>
                    <p className="text-xs font-semibold text-gray-300">{data.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
