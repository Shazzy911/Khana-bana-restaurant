import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface common_slide_type {
  id: number;
  image?: StaticImageData | HTMLImageElement | string | StaticImport;
  title: string;
  sub_title: string;
}
