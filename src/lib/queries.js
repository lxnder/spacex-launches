import { gql } from "apollo-boost";

export const GET_LAUNCH = id => gql`
  {
    launch(id: 30) {
      details
      launch_date_unix
      launch_site {
        site_name_long
      }
      launch_success
      links {
        flickr_images
        article_link
        video_link
        wikipedia
        mission_patch
      }
      rocket {
        rocket {
          name
          description
          wikipedia
          cost_per_launch
          height {
            feet
            meters
          }
          boosters
          diameter {
            meters
            feet
          }
          engines {
            number
            thrust_vacuum {
              kN
            }
          }
          stages
          success_rate_pct
          mass {
            kg
            lb
          }
        }
      }
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
