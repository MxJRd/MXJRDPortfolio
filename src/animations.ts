export const makeShimmer = 'before:absolute before:content-[""] before:py-6 before:px-2 before:bg-gradient-to-l before:from-[#ffffff] before:ml-5 relative'
export const makeLift = 'transition transform delay-50 hover:-translate-y-1'
export const makePressed = 'transition transform hover:translate-y-0'
export const makeButtonExpand = 'after:content-[""] after:absolute after:bg-white after:w-full after:h-full after:inline-block after:-translate-x-[86%] after:-translate-y-[25%] hover:after:transform hover:after:scale-150 hover:after:transition-all hover:after:duration:2000 hover:after:ease-out hover:after:opacity-0'
export const doMakeShrink = (groupActionName: string) => `transition transform ${groupActionName}:[&:not(:hover)]:scale-95`


export default {
  makeShimmer,
  makeLift
}
