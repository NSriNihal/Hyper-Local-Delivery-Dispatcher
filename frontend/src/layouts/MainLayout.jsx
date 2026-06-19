import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 w-full flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout