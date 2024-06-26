
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AdminPage from "../pages/customs/AdminPage";
import CartPage from "../pages/customs/CartPage";
import NavbarComp from "../pages/customs/NavbarComp";
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComp />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/product",
        element: <div>product</div>,
    },
    {
        path: "/product-details/:id",
        element: <div>product details</div>,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/payment",
        element: <div>payment</div>,
    },
]);
const Navigation = ({ children }) => {
    return (

        <RouterProvider router={router}>
            {children}
        </RouterProvider>


    )
}

export default Navigation