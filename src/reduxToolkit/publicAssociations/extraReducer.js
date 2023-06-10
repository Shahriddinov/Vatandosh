import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_COMMUNITY_ALL_PAGINATION } from "../../services/api/utils";
import { GET_COMMUNITY_ALL_REGIONS } from "../../services/api/utils";

export const getPublicAssociationData = createAsyncThunk(
    "/community/all-community",
    async ({ regionId, page, perPage }) => {
        const { data } = await axios.get(GET_COMMUNITY_ALL_PAGINATION, {
            params: {
                region_id: regionId,
                page: page,
                per_page: perPage,
            },
        });

        return data;
    }
);

export const getAllCountriesData = createAsyncThunk(
    "/community/all-region",
    async () => {
        const { data } = await axios.get(GET_COMMUNITY_ALL_REGIONS);

        return data;
    }
);
