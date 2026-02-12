import { use, useMemo } from "react";
import { useSearchParams } from "react-router";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

type ActiveTab = "all" | "favorites" | "heroes" | "villains";

export const useQueryParameters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { favoriteCount, favorites } = use(FavoriteHeroContext);

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
        favoriteCount,
        favorites,

        setSearchParams
    }
}