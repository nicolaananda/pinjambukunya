import { useParams } from "react-router-dom";
import { Header } from "@/components/sharedui/header";
import { useQuery } from "react-query";
import { bookServices } from "@/services/bookServices";
import API_URL from "@/config/apiUrl";
import { Button } from "@/components/ui/button";

export default function SinglePage() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery([`book-${id}`], () =>
    bookServices.getSingleData(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading book data</div>;
  }

  return (
    <main className="space-y-6">
      <Header />
      <section className="flex justify-center items-center ">
        <div className="grid grid-cols-2 max-w-4xl ">
          <img
            src={`${API_URL}/${data?.file}`}
            width={400}
            className="rounded-lg"
          />
          <div>
            <h1 className="font-bold text-5xl text-neutral-500">
              {data?.name}
            </h1>
            <h2 className="font-semibold text-l mb-4">{data?.author}</h2>
            <p className="text-justify">{data?.description}</p>
            <br />
            <Button size={"sm"}>Pinjam</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
