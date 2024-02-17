import { Type } from '@/models/type';
import types from '@/assets/resources/types.json';

export type TypeFinderData = {
  findAllTypes: () => Type[];
  findOneType: (id: number) => Type;
}

export function useTypeFinder(): TypeFinderData {
  function findAllTypes(): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(type => type.id !== 0);

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  function findOneType(id: number): Type {
    const typeList = types as unknown as Type[];
    const type = typeList.find(type => type.id === id);

    if (!type) {
      return typeList[0];
    }

    return type;
  }

  return { findAllTypes, findOneType };
}