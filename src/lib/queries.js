import { gql } from "apollo-boost";

export const GET_LAUNCH = id => gql`
  {
    launch(id: ${id}) {
      details
      id
      is_tentative
      launch_date_unix
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      links {
        presskit
        flickr_images
        article_link
        video_link
        wikipedia
        mission_patch
        mission_patch_small
      }
      mission_id
      mission_name
      rocket {
        rocket {
          name
          type
          description
          id
          wikipedia
        }
      }
      ships {
        name
        type
        id
        image
        url
      }
      upcoming
    }
  }
`;

export const GET_LAUNCHES = gql`
  {
    launches(sort: "mission_name", order: "asc") {
      id
      launch_date_unix
      launch_success
      mission_name
      upcoming
      links {
        mission_patch_small
      }
    }
  }
`;
