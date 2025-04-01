import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata = {
  title: "School Diary",
  description: "School Diary - Your digital companion for managing school activities, assignments and schedules",
};

export default function SchoolLayout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
