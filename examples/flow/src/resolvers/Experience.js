import { ExperienceResolvers } from "../generated";
import { TypeMap } from "./types/TypeMap";
import { ExperienceCategoryParent } from "./ExperienceCategory";
import { LocationParent } from "./Location";
import { ReviewParent } from "./Review";
import { PictureParent } from "./Picture";

export interface ExperienceParent {
  id: string;
  category?: ExperienceCategoryParent;
  title: string;
  location: LocationParent;
  pricePerPerson: number;
  reviews: ReviewParent[];
  preview: PictureParent;
  popularity: number;
}

export const Experience: ExperienceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  category: parent => parent.category,
  title: parent => parent.title,
  location: parent => parent.location,
  pricePerPerson: parent => parent.pricePerPerson,
  reviews: parent => parent.reviews,
  preview: parent => parent.preview,
  popularity: parent => parent.popularity
};
