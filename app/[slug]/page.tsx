import Iphone16Pro from "@/app/ui/iphone/iphone_16_pro/iphone_16_pro";

async function Page({ slug }: { slug: string }) {
  await slug;
  if (slug === "iphone-16-pro") {
    return <Iphone16Pro />;
  }

  return (
    <div className="py-12">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}

export default Page;