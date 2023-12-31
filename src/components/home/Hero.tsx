import Image from "next/image";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.p
        // y：200表示在垂直方向下面200；y:0表示回归正常垂直位置
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring" }}
        // text-center让文字在block内居中；w-[]设置宽度，超出就换行；my是上下外边距、px是左右内边距
        className="m-auto my-10 w-[400px] px-1.5 text-center text-3xl font-bold dark:text-white"
      >
        Organizing your day activity with Todo Daily
      </motion.p>
      <div className="relative">
        {/* absolute使用绝对定位，固定在父级顶部位置；再用[left-0 right-0 text-center]配合居中(?[top-0]) */}
        <div className="absolute left-0 right-0 text-center">
          {/* py是上下内边距；rounged是圆形边框；hover:opacity设置元素透明度 */}
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-70">
            Get started
          </button>
        </div>
        {/* 这里src的路径不用指定public目录，是会自动去找图片？；固定宽高之后使用w-full可以自动撑满 */}
        <Image
          src="/hero.png"
          alt="hero"
          width="1363"
          height="909"
          className="w-full"
        ></Image>
      </div>
    </motion.div>
  );
}
