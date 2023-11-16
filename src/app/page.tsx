import Image from 'next/image'
import ChuckQuote from "@/app/quote";
import getQuote from "@/lib/get-quote";
import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()


// @ts-ignore
export default async function Home() {
    const initQuote = await getQuote();
    const user = await prisma.user.create({data: {}})
    const userCount = await prisma.user.count()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
            <div className="relative flex place-items-left w-3/6">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/wus.svg"
                    alt="WUS Logo"
                    width={140}
                    height={91}
                    priority
                />
            </div>

            <div className="bg-white relative flex items-center justify-center overflow-hidden w-3/6">
                <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                    <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                        <div className="mx-auto w-fit rounded-br-none rounded-tl-none">
                            <Image
                                src="https://picsum.photos/400/400"
                                alt="Random Image"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <ChuckQuote initQuote={initQuote}/>
                    </div>
                </div>
            </div>

            <footer className="bg-white shadow m-4 dark:bg-gray-800 w-3/6">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">You are {userCount} user hier</span>
                </div>
            </footer>
        </main>
    )
}

