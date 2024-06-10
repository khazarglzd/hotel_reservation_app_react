import Home from "../components/home/Home"
import AboutUs from "../pages/AboutUs"
import BookingPage from "../pages/BookingPage"
import TeamPage from "../pages/TeamPage"
import TestimonialPage from "../pages/TestimonialPage"
import PageNotFound from "../pages/PageNotFound"
import ContactPage from "../pages/ContactPage"
import RoomPage from "../pages/RoomPage"
import ServicesPage from "../pages/ServicesPage"

export const CustomRouter = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/booking",
        element: <BookingPage />
    },
    {
        path: "/team",
        element: <TeamPage />
    },
    {
        path: "/testimonial",
        element: <TestimonialPage />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/*",
        element: <PageNotFound />
    },
    {
        path: "/rooms",
        element: <RoomPage />
    },
    {
        path: "/services",
        element: <ServicesPage />
    },
]