import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { loginStudent } from "../../../Backend/apis/Api";

const context = createContext();

function DashBoardContext() {
  const { data, isError, isLoading } = useQuery({
    queryKey: [],
    queryFn: loginStudent,
    staleTime: 1 * 1000,
    cacheTime: 3 * 1000,
  });
  console.log(data);
  return (
    <>
      <div>data</div>
    </>
  );
}

export default DashBoardContext;
