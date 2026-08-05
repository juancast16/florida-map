const company = {

    name: "Built With Love",
    pageTitle: "Built With Love | Service Areas",
    headerTitle: "Florida Service Areas",
    metaDescription: "Explore Built With Love construction and remodeling service areas across Florida counties.",

    // Logo: "text" | "image" | "svg"
    logo: {
        type: "text",
        value: "Built With Love"
    },

    colors: {
        primary: "#0B63CE",
        primaryDark: "#143D6B",
        primaryHover: "#084c9c",
        primarySoft: "#E8F1FB",
        inactive: "#D7DCE5",
        selectedBorder: "#143D6B",
        border: "#ffffff",
        borderMuted: "#E6EAF0",
        background: "#F3F6FB",
        surface: "#ffffff",
        card: "#F7F9FC",
        muted: "#5B6575",
        text: "#3F4B5F",
        textStrong: "#143D6B",
        shadow: "rgba(20, 61, 107, 0.10)"
    },

    searchPlaceholder: "Search county...",
    search: {
        noResults: "No counties found",
        ariaLabel: "Search Florida counties"
    },

    panel: {
        title: "County Details",
        subtitle: "Coverage and available services",
        closeLabel: "Close details",
        empty: {
            hero: "",
            heading: "Coverage Area",
            body: "Click on a county to view services."
        },
        outside: {
            heading: "Outside Coverage",
            message: "This county is currently outside our service area."
        },
        labels: {
            office: "Office",
            projects: "Projects",
            services: "Services"
        }
    },

    legend: {
        active: "Active Service Area",
        inactive: "Outside Coverage"
    },

    mapBadge: {
        title: "Florida Coverage",
        subtitle: "Serving West Central Florida"
    },

    stats: [
        { label: "Active Counties", value: "4" },
        { label: "Licensed & Insured", value: "" },
        { label: "Residential & Commercial", value: "" }
    ]

};

const countyData = {

    "Pinellas": {
        active: true,
        office: "St. Petersburg",
        coverage: "Main Service Area",
        aliases: ["St. Petersburg", "Clearwater"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/pinellas-county"
    },

    "Hillsborough": {
        active: true,
        office: "Tampa",
        coverage: "Service Area",
        aliases: ["Tampa"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/hillsborough-county"
    },

    "Pasco": {
        active: true,
        office: "Pasco County",
        coverage: "Service Area",
        aliases: [],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/pasco-county"
    },

    "Manatee": {
        active: true,
        office: "Bradenton",
        coverage: "Service Area",
        aliases: ["Bradenton"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/manatee-county"
    }

};
