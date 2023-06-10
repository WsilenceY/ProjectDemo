/*
 * @Author: wangying
 * @Date: 2023-06-10 21:02:37
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-10 21:04:20
 * @FilePath: /ProjectDemo/src/pages/list/types.ts
 * @Description: types for list
 */

// search form data
export interface queryType {
  searchText?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  sort?: string;
}

// item data
export interface itemType {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
