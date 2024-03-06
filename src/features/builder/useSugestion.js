import { useTranslation } from "react-i18next";
import { gpuSuggestion } from "../../services/apiGpu";
import { useEffect, useState } from "react";
import { cpuSuggestion } from "../../services/apiCPU";
import { set } from "date-fns";

export function useSugestion(cart) {
  const { t } = useTranslation();
  const [suggestion, setSuggestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestion = async () => {
      if (!cart?.cart) {
        setIsLoading(false);
        return;
      }
      const { gpu = null, cpu = null } = cart.cart;
      
      try {
        const cpuResult = await cpuSuggestion(cpu?.price, cpu?._id, cpu?.benchmark);
        const gpuResult = await gpuSuggestion(gpu?.price, gpu?._id, gpu?.score);
        if (gpuResult.data[0]){
            setSuggestion((prevSuggestion) => [
          {
            component: "Karta graficzna",
            desc: `${t("suggestionDesc")} ${gpuResult.data[0].manufacture} ${
              gpuResult.data[0].name 
            } ${gpuResult.data[0].chipset}`,
          },
        ]);
        }
        
        if(cpuResult.data[0]){
           setSuggestion((prevSuggestion) => [
          ...prevSuggestion,
          {
            component: "Procesor",
            desc: `${t("suggestionDesc")} ${cpuResult.data[0].manufacture} ${
              cpuResult.data[0].name
            }`,
          },
        ]); 
        }
        setIsLoading(false);
        
      } catch (error) {
        console.error("Failed to fetch GPU suggestion:", error);
      }
      setIsLoading(false);
    };
    setSuggestion([]);
    setIsLoading(true);
    fetchSuggestion();
  }, [cart]);
 

  return { suggestion, isLoading };
}
