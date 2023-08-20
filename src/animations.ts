export const makeShimmer = 'before:absolute before:content-[""] before:py-6 before:px-2 before:bg-gradient-to-l before:from-[#ffffff] before:ml-5 relative'
export const makeLift = 'transition transform delay-50 hover:-translate-y-1'
export const doMakeShrink = (groupActionName: string) => `transition transform ${groupActionName}:[&:not(:hover)]:scale-95`


export default {
  makeShimmer,
  makeLift
}