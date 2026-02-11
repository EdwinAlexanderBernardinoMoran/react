import { useMemo } from "react";
import { useSearchParams } from "react-router";

type ActiveTab = "all" | "favorites" | "heroes" | "villains";

export const useQueryParameters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("Parameters Hook", searchParams);


    const activeTab = searchParams.get("tab") ?? "all";
    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "6";
    const category = searchParams.get("category") ?? "all";

    const selectedTab = useMemo(() => {
        const validTabs: ActiveTab[] = ["all", "favorites", "heroes", "villains"];
        return validTabs.includes(activeTab as ActiveTab) ? (activeTab as ActiveTab) : "all";
    }, [activeTab]);

    return {
        page,
        limit,
        category,
        selectedTab,

        setSearchParams
    }
}