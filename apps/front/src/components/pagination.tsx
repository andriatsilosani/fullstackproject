import { calculatePageNumbers } from "@/lib/helper/pagination.helper"
import Link from "next/link"
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
    totalPages: number,
    currentPage: number,
    pageNeighbors?: number,
    className?: string
}

const Pagination = ({
    totalPages,
    currentPage,
    pageNeighbors = 2,
    className,
}: Props) => {
    const pageNumbers = calculatePageNumbers({
        pageNeighbors,
        currentPage,
        totalPages
    })
    return (
        <div className={cn("flex items-center justify-center gap-2", className)}>
            {/* previous page button */}
            {
                currentPage != 1 && (
                    <button className={cn("rounded-md bg-slate-200 py-2 px-2")}>
                        <Link href={`?page=${currentPage - 1}`}>
                            
                            <ChevronLeftIcon className="w-4"/>
                        </Link>
                    </button>
                )
            }

            {pageNumbers.map((page, index) => 
                page === "..." ? (
                    <span key={`ellipsis-${index}`} className="cursor-not-allowed">...</span>
                ) : (
                    <Link key={index} href={`?page=${page}`}>
                        <button className = { 
                            cn("px-3 py-1 rounded-md transition hover:text-sky-600" , {
                                "bg-slate-200": currentPage != page && page != "...",
                                "bg-blue-500 text-white": currentPage == page,
                            })
                        }> 
                            {page}
                        </button>
                    </Link>
                )
            )}
       
            {/* next page button */}
            {currentPage != totalPages && (
                <button className="rounded-md bg-slate-200 py-2 px-2">
                    <Link href={`?page=${currentPage+1}`}>
                        <ChevronRightIcon className="w-4"/>
                    </Link>
                </button>
            )}
        </div>
    )
}

export default Pagination