import styled from "styled-components";
import PriceChart from "./PriceChart";
import ProductDetails from "./ProductDetails";
import ProductSpecs from "./ProductSpecs";


const StyledProductLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr ;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
    const price = [100,200,300,250,300,260,200]
    const numDays = ['2024-01-01','2024-01-02','2024-01-03','2024-01-04','2024-01-05','2024-01-06','2024-01-07','2024-01-08','2024-01-09','2024-01-10','2024-01-11','2024-01-12','2024-01-13','2024-01-14']
    const query = {
        "job_id": "65a8222cef65604ead3074b2",
        "status": "finished",
        "free_credits": 1,
        "paid_credits": 0,
        "results": [
          {
            "query": {
              "source": "google_shopping",
              "country": "pl",
              "topic": "product_and_offers",
              "key": "id",
              "value": "14072215030660324520",
              "max_pages": 1,
              "max_age": 1200,
              "sort_by": "ranking_descending",
              "condition": "any",
              "shipping": "any"
            },
            "success": true,
            "metadata": {
              "from_cache": false,
              "page_count_requested": 1,
              "page_count_delivered": 1,
              "page_count_from_cache": 0,
              "page_count_live": 1,
              "request_count": 3,
              "updated_at": "2024-01-17T18:53:50Z"
            },
            "content": {
              "id": "14072215030660324520",
              "name": "Amd Ryzen 7 7800X3D procesor",
              "image_url": "https://lh3.googleusercontent.com/spp/AE_ITi3BJlXlH4oDfn-AUDmzQCSW2mmDOUO0nvYCe5U2LCJzQKgHQKih2vXOQlAwlo_o4_3-M3ln-dQDPdoFikco5zFonD0uccB3y6m1d8xlAsLg7lajTpHVFnzL9S-oKkzTdOksMOlbgSfMT2yzpvRq-0GnJntqewf6CSvxf8J-Bmfz9xvomhBYLtgSm3_EWHkOXM-ZgzZvlw=s512-pd-pc0x00ffffff",
              "description": "Procesor AMD Ryzen 7 7800X3D to sprzęt, który potrafi zaoferować użytkownikowi potężną dawkę mocy obliczeniowej. Sprzęt ten został uzbrojony w aż 8 rdzeni i 16 wątków. Dzięki temu jest on w stanie realizować wiele różnych zadań równocześnie i to b...",
              "feature_bullets": [
                "Najszybsze zwycięstwa.",
                "Najlepszy na świecie procesor do komputerów stacjonarnych zapewnia doskonałą wydajność w grach.",
                "Technologia AMD StoreMI.",
                "Prosty i szybki sposób na rozszerzenie pamięci danych i przyspieszenie komputera stacjonarnego AMD Ryzen.",
                "Program AMD Ryzen Master."
              ],
              "properties": [
                "8-rdzeniowy",
                "Przetaktowywanie",
                "Socket AM4"
              ],
              "url": "https://www.google.pl/shopping/product/14072215030660324520?hl=pl&gl=pl&sfr=compass",
              "review_count": 855,
              "review_rating": 98,
              "price": null,
              "gtins": null,
              "eans": null,
              "brand_name": null,
              "category_path": null,
              "category_name": null,
              "specifications": [
                {
                  "label": "Architektura (bit)",
                  "value": [
                    "64"
                  ]
                },
                {
                  "label": "Cache procesora",
                  "value": [
                    "104 MB"
                  ]
                },
                {
                  "label": "Częstotliwość bazowa procesora",
                  "value": [
                    "4",
                    "2 GHz"
                  ]
                },
                {
                  "label": "Częstotliwość taktowania rdzenia procesora (ghz)",
                  "value": [
                    "4.2"
                  ]
                },
                {
                  "label": "Częstotliwość taktowania turbo (ghz)",
                  "value": [
                    "5"
                  ]
                },
                {
                  "label": "Dedykowana karta graficzna",
                  "value": [
                    "Nie"
                  ]
                },
                {
                  "label": "Dodatkowe cechy",
                  "value": [
                    "Zintegrowany układ graficzny"
                  ]
                },
                {
                  "label": "Gniazdo procesora",
                  "value": [
                    "Gniazdo AM5"
                  ]
                },
                {
                  "label": "Gwarancja",
                  "value": [
                    "3 lata"
                  ]
                },
                {
                  "label": "Ilość rdzeni procesora",
                  "value": [
                    "8"
                  ]
                },
                {
                  "label": "Ilość wątków procesora",
                  "value": [
                    "16"
                  ]
                },
                {
                  "label": "Liczba rdzeni karty graficznej",
                  "value": [
                    "2"
                  ]
                },
                {
                  "label": "Liczba rdzeni procesora",
                  "value": [
                    "8"
                  ]
                },
                {
                  "label": "Liczba wątków",
                  "value": [
                    "16"
                  ]
                },
                {
                  "label": "Magazyn",
                  "value": [
                    "Globalny"
                  ]
                },
                {
                  "label": "Maksymalne taktowanie procesora",
                  "value": [
                    "5 GHz"
                  ]
                },
                {
                  "label": "Moc tdp (w)",
                  "value": [
                    "120"
                  ]
                },
                {
                  "label": "Model dedykowanej karty graficznej",
                  "value": [
                    "Niedostępny"
                  ]
                },
                {
                  "label": "Model procesora",
                  "value": [
                    "7800X3D"
                  ]
                },
                {
                  "label": "Model wbudowanej karty graficznej",
                  "value": [
                    "AMD Radeon Graphics"
                  ]
                },
                {
                  "label": "Obsługa kanałów pamięci",
                  "value": [
                    "Dwukanałowy"
                  ]
                },
                {
                  "label": "Odblokowany mnożnik",
                  "value": [
                    "tak"
                  ]
                },
                {
                  "label": "Pamięć cache l1",
                  "value": [
                    "8x 32 KB (Dane)",
                    "8x 32 KB (Instrukcje)"
                  ]
                },
                {
                  "label": "Pamięć cache l2",
                  "value": [
                    "8 MB"
                  ]
                },
                {
                  "label": "Pamięć cahce l3",
                  "value": [
                    "96 MB"
                  ]
                },
                {
                  "label": "Proces litograficzny",
                  "value": [
                    "5 nm"
                  ]
                },
                {
                  "label": "Proces technologiczny (nm)",
                  "value": [
                    "5"
                  ]
                },
                {
                  "label": "Producent procesora",
                  "value": [
                    "AMD"
                  ]
                },
                {
                  "label": "Pudełko",
                  "value": [
                    "Tak"
                  ]
                },
                {
                  "label": "Rodzaj gniazda",
                  "value": [
                    "Socket AM5"
                  ]
                },
                {
                  "label": "Rodzaj opakowania",
                  "value": [
                    "BOX"
                  ]
                },
                {
                  "label": "Segment rynku",
                  "value": [
                    "Komputer stacjonarny"
                  ]
                },
                {
                  "label": "Taktowanie zegara pamięci wspierane przez procesor",
                  "value": [
                    "5200 Mhz",
                    "3600"
                  ]
                },
                {
                  "label": "Termiczny układ zasilania (tdp)",
                  "value": [
                    "120 W"
                  ]
                },
                {
                  "label": "Tryb pracy procesora",
                  "value": [
                    "64-bit"
                  ]
                },
                {
                  "label": "Typ pamięci procesora",
                  "value": [
                    "L2 & L3"
                  ]
                },
                {
                  "label": "Typ procesora",
                  "value": [
                    "AMD Ryzen 7"
                  ]
                },
                {
                  "label": "Typy pamięci wspierane przez procesor",
                  "value": [
                    "DDR5-SDRAM"
                  ]
                },
                {
                  "label": "Wbudowana bazowa częstotliwość procesora",
                  "value": [
                    "400 Mhz"
                  ]
                },
                {
                  "label": "Wbudowana karta graficzna",
                  "value": [
                    "Tak"
                  ]
                },
                {
                  "label": "Zawiera system chłodzący",
                  "value": [
                    "Tak"
                  ]
                },
                {
                  "label": "Zintegrowany układ graficzny",
                  "value": [
                    "AMD Radeon seria R7"
                  ]
                }
              ],
              "offer_count": 20,
              "offers_url": "https://www.google.pl/shopping/product/14072215030660324520/offers?hl=pl&prds=sgro:oo&sfr=compass&gl=pl",
              "offers": [
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1799.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1819.0",
                  "shipping_costs": "20.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.x-kom.pl/p/1117011-procesor-amd-ryzen-7-amd-ryzen-7-7800x3d.html?srsltid=AfmBOoqf3rZM6hkaNKQ07cNbUBkc7c0eYg-N-WcTqpSsEEchekDpN7Vva50",
                  "shop_name": "x-kom.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-908e0edd8a8",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-908e0edd8a8",
                  "shop_url": "www.x-kom.pl",
                  "shop_domain": "x-kom.pl",
                  "shop_matching_id": "x-kom.pl",
                  "page": 1,
                  "position": 1
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1799.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1799.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.morele.net/procesor-amd-ryzen-7-7800x3d-4-2-ghz-96-mb-box-100-100000910wof-12668825/?srsltid=AfmBOorPhS_4XYAT_ZyujHeETJ05o_CZi5IaiL2--0C3lgnVFxO-tK77TzQ",
                  "shop_name": "Morele.net",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-3947c25a5ff",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-3947c25a5ff",
                  "shop_url": "www.morele.net",
                  "shop_domain": "morele.net",
                  "shop_matching_id": "morele.net",
                  "page": 1,
                  "position": 2
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1852.93",
                  "price_additional_info": [],
                  "price_with_shipping": "1852.93",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/procesory/procesor-amd-ryzen-7-7800x3d",
                  "shop_name": "Media Expert",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-5d4e52f453b",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-5d4e52f453b",
                  "shop_url": "www.mediaexpert.pl",
                  "shop_domain": "mediaexpert.pl",
                  "shop_matching_id": "mediaexpert.pl",
                  "page": 1,
                  "position": 3
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1825.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1825.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.ceneo.pl/151188370;pla?utm_source=free_listing&utm_medium=organic&srsltid=AfmBOooQv0To94Pvhi3TNAETGC0HHJYR62TbX9F4-8OgcfazmOUpUyGo0PE",
                  "shop_name": "Ceneo.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-bec41ea791f",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-bec41ea791f",
                  "shop_url": "www.ceneo.pl",
                  "shop_domain": "ceneo.pl",
                  "shop_matching_id": "ceneo.pl",
                  "page": 1,
                  "position": 4
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "2019.0",
                  "price_additional_info": [],
                  "price_with_shipping": "2019.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.euro.com.pl/procesory/amd-procesor-amd-ryzen-7-7800x3d-no-cooler.bhtml?from=gf&p=2019.00&cr=0&srsltid=AfmBOoqWggU7aTo0gzPU6cbOCzFM3HZYb0evafRv0hcYI-C2yYKwUossmlU",
                  "shop_name": "RTV Euro AGD",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-aee81126106",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-aee81126106",
                  "shop_url": "www.euro.com.pl",
                  "shop_domain": "euro.com.pl",
                  "shop_matching_id": "euro.com.pl",
                  "page": 1,
                  "position": 5
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1819.69",
                  "price_additional_info": [],
                  "price_with_shipping": "1819.69",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.komputronik.pl/product/823803/amd-ryzen-7-7800x3d.html",
                  "shop_name": "Komputronik.pl",
                  "shop_review_count": 435,
                  "shop_review_rating": 100,
                  "shop_id": "priceapi-5249da7a979",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-5249da7a979",
                  "shop_url": "www.komputronik.pl",
                  "shop_domain": "komputronik.pl",
                  "shop_matching_id": "komputronik.pl",
                  "page": 1,
                  "position": 6
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1870.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1870.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.alsen.pl/amd-procesor-ryzen-7-7800x3d-4-2ghz-100-100000910wof",
                  "shop_name": "Alsen",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-d79fcdd0ce1",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-d79fcdd0ce1",
                  "shop_url": "www.alsen.pl",
                  "shop_domain": "alsen.pl",
                  "shop_matching_id": "alsen.pl",
                  "page": 1,
                  "position": 7
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1949.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1949.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://techlord.pl/amd-ryzen-7-7800x3d-am5-p-11081.html",
                  "shop_name": "techlord.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-5a603681319",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-5a603681319",
                  "shop_url": "techlord.pl",
                  "shop_domain": "techlord.pl",
                  "shop_matching_id": "techlord.pl",
                  "page": 1,
                  "position": 8
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1868.5",
                  "price_additional_info": [],
                  "price_with_shipping": "1882.49",
                  "shipping_costs": "13.99",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.empik.com/amd-procesor-ryzen-7-7800x3d-4-2ghz-100-100000910wof-amd,p1416621944,elektronika-p?mpShopId=4942&srsltid=AfmBOorI3XutA2l6pfXzv4bkSIgahqXAOZofBkfx_-gePNnzTdq7syHUIeA",
                  "shop_name": "Empik.com",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-b635a157260",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-b635a157260",
                  "shop_url": "www.empik.com",
                  "shop_domain": "empik.com",
                  "shop_matching_id": "empik.com",
                  "page": 1,
                  "position": 9
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1825.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1825.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.zadowolenie.pl/amd-procesor-ryzen-7-7800x3d-4-2ghz-100-100000910wof",
                  "shop_name": "Zadowolenie.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-093fcbc6eb2",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-093fcbc6eb2",
                  "shop_url": "www.zadowolenie.pl",
                  "shop_domain": "zadowolenie.pl",
                  "shop_matching_id": "zadowolenie.pl",
                  "page": 1,
                  "position": 10
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1858.65",
                  "price_additional_info": [],
                  "price_with_shipping": "1858.65",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.avans.pl/komputery-i-tablety/podzespoly-komputerowe/procesory/procesor-amd-ryzen-7-7800x3d",
                  "shop_name": "Avans",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-6c66d90aac2",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-6c66d90aac2",
                  "shop_url": "www.avans.pl",
                  "shop_domain": "avans.pl",
                  "shop_matching_id": "avans.pl",
                  "page": 1,
                  "position": 11
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "2019.0",
                  "price_additional_info": [],
                  "price_with_shipping": "2019.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.oleole.pl/procesory/amd-procesor-amd-ryzen-7-7800x3d-no-cooler.bhtml?from=dr&srsltid=AfmBOoof3EkWxed8cxBAnXmn9V9vZKsGNYbud_VZjDH_8Ecel8sbiAxyBiQ",
                  "shop_name": "OleOle!",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-0ac11025e6b",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-0ac11025e6b",
                  "shop_url": "www.oleole.pl",
                  "shop_domain": "oleole.pl",
                  "shop_matching_id": "oleole.pl",
                  "page": 1,
                  "position": 12
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1835.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1835.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://bitcomputer.pl/pl/p/AMD-Procesor-Ryzen-7-7800X3D-4,2GHz-100-100000910WOF/102016",
                  "shop_name": "Bitcomputer",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-30da16b55b8",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-30da16b55b8",
                  "shop_url": "bitcomputer.pl",
                  "shop_domain": "bitcomputer.pl",
                  "shop_matching_id": "bitcomputer.pl",
                  "page": 1,
                  "position": 13
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1825.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1836.99",
                  "shipping_costs": "11.99",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://allegro.pl/oferta/procesor-amd-ryzen-7-7800x3d-8x4-2-ghz-96-mb-am5-box-13551774815?utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_term=test",
                  "shop_name": "Allegro",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-381bbb888ab",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-381bbb888ab",
                  "shop_url": "allegro.pl",
                  "shop_domain": "allegro.pl",
                  "shop_matching_id": "allegro.pl",
                  "page": 1,
                  "position": 14
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1858.65",
                  "price_additional_info": [],
                  "price_with_shipping": "1858.65",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.electro.pl/komputery-i-tablety/podzespoly-komputerowe/procesory/procesor-amd-ryzen-7-7800x3d?srsltid=AfmBOopQUvFJCh9mIhycG1-EoqJ3b6QXGLzmXS7HWrRFatohAxelPmiTRmM",
                  "shop_name": "Electro.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-c4a47e59f37",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-c4a47e59f37",
                  "shop_url": "www.electro.pl",
                  "shop_domain": "electro.pl",
                  "shop_matching_id": "electro.pl",
                  "page": 1,
                  "position": 15
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1905.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1905.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://www.kakto.pl/amd-procesor-ryzen-7-7800x3d-4-2ghz-100-100000910wof",
                  "shop_name": "kakto.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-60b51dfe29d",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-60b51dfe29d",
                  "shop_url": "www.kakto.pl",
                  "shop_domain": "kakto.pl",
                  "shop_matching_id": "kakto.pl",
                  "page": 1,
                  "position": 16
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1852.99",
                  "price_additional_info": [],
                  "price_with_shipping": "1861.98",
                  "shipping_costs": "8.99",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://supertech.pl/produkt/amd_ryzen_7_7800x3d_procesor_42_ghz_96_mb_l3_pudelko_108874593.html",
                  "shop_name": "SuperTech.pl",
                  "shop_review_count": 502,
                  "shop_review_rating": 94,
                  "shop_id": "priceapi-0ddda12e174",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-0ddda12e174",
                  "shop_url": "supertech.pl",
                  "shop_domain": "supertech.pl",
                  "shop_matching_id": "supertech.pl",
                  "page": 1,
                  "position": 17
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1921.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1921.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://colorcorner.pl/pl/p/AMD-Procesor-Ryzen-7-7800X3D-4,2GHz-100-100000910WOF/28690",
                  "shop_name": "colorcorner.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-87f6680305b",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-87f6680305b",
                  "shop_url": "colorcorner.pl",
                  "shop_domain": "colorcorner.pl",
                  "shop_matching_id": "colorcorner.pl",
                  "page": 1,
                  "position": 18
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1941.0",
                  "price_additional_info": [],
                  "price_with_shipping": "1941.0",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://mocnykomputer.pl/pl/p/AMD-Procesor-Ryzen-7-7800X3D-4,2GHz-100-100000910WOF/38542",
                  "shop_name": "Mocnykomputer.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-9c2e059c37b",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-9c2e059c37b",
                  "shop_url": "mocnykomputer.pl",
                  "shop_domain": "mocnykomputer.pl",
                  "shop_matching_id": "mocnykomputer.pl",
                  "page": 1,
                  "position": 19
                },
                {
                  "id": null,
                  "product_id": "14072215030660324520",
                  "price": "1782.99",
                  "price_additional_info": [],
                  "price_with_shipping": "1782.99",
                  "shipping_costs": "0.0",
                  "tax": null,
                  "currency": "PLN",
                  "condition_text": null,
                  "condition_code": "new",
                  "url": "https://pcforce.pl/pl/p/AMD-Ryzen-7-7800X3D-4.2GHz/291006",
                  "shop_name": "pcforce.pl",
                  "shop_review_count": 0,
                  "shop_review_rating": null,
                  "shop_id": "priceapi-58a4797ce7a",
                  "shop_sub_id": null,
                  "shop_extended_source_id": "priceapi-58a4797ce7a",
                  "shop_url": "pcforce.pl",
                  "shop_domain": "pcforce.pl",
                  "shop_matching_id": "pcforce.pl",
                  "page": 1,
                  "position": 20
                }
              ]
            }
          }
        ]
      }
  return (
    <StyledProductLayout>
      <ProductDetails details={query.results[0].content}></ProductDetails>
      
      
      <PriceChart price={price} numDays={numDays} />
      <ProductSpecs details={query.results[0].content}></ProductSpecs>
      
    </StyledProductLayout>
  );
}

export default DashboardLayout;
