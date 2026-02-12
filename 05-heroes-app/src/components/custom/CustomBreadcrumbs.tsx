import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";
import { Link } from "react-router"

interface Breadcrumbs {
    label: string;
    to: string;
}

interface CustomBreadcrumbsProps {
    currentPage: string;
    breadcrumbs?: Breadcrumbs[];
}

export function CustomBreadcrumbs({ currentPage, breadcrumbs = [] }: CustomBreadcrumbsProps) {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbs.map((breadcrumb, index) => (
                    <div className="flex items-center">
                        <BreadcrumbItem key={index}>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </ BreadcrumbSeparator>
                            <BreadcrumbLink asChild>
                                <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}

                <BreadcrumbSeparator>
                    <SlashIcon />
                </ BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
