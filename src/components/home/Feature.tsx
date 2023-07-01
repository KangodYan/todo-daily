export const Feature = () => {
  return (
    <div>
      <div className="mt-10 py-5 text-center text-2xl font-bold">
        Don’t let your day doing nothing
      </div>
      {/* grid-cols-4表示内部竖着排列4个元素，[sm:]排除最小size的屏幕 */}
      <div className="mt-10 grid-cols-4 gap-x-4 px-14 sm:mb-20 sm:grid">
        {/* grid使用网格布局；grid-rows-2表示内部横着排列2个元素；place-content-center用于居中 */}
        <div className="grid grid-rows-2 place-content-center gap-y-1 sm:gap-y-2">
          {/* 
            因[className="fill-primary"]无法覆盖svg内部fill属性，遂放弃使用
            import FluentTasks from "public/fluent_tasks-app-28-filled.svg"
            <Image
                src={FluentTasks as string}
                alt="FluentTasks"
                className="fill-primary"
            /> 
          */}
          <svg
            width="109"
            height="109"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.2232 7.78577C24.8677 7.78577 21.6497 9.11872 19.277 11.4914C16.9044 13.8641 15.5714 17.0821 15.5714 20.4376V88.5625C15.5714 91.918 16.9044 95.136 19.277 97.5087C21.6497 99.8814 24.8677 101.214 28.2232 101.214H65.4701L57.0732 92.8174C56.2598 92.0041 55.6146 91.0385 55.1745 89.9758C54.7343 88.9131 54.5077 87.7742 54.5077 86.6239C54.5077 85.4737 54.7343 84.3347 55.1744 83.272C55.6146 82.2093 56.2598 81.2437 57.0732 80.4304C57.8865 79.617 58.8521 78.9718 59.9148 78.5317C60.9775 78.0915 62.1165 77.8649 63.2667 77.8649C64.4169 77.8649 65.5559 78.0915 66.6186 78.5317C67.6813 78.9718 68.6469 79.617 69.4602 80.4304L74.9375 85.9076L92.1011 68.744C92.5137 68.3314 92.9575 67.9654 93.4286 67.654V20.4376C93.4286 17.0821 92.0956 13.8641 89.7229 11.4914C87.3503 9.11872 84.1322 7.78577 80.7768 7.78577H28.2232ZM40.875 34.0625C40.875 35.3531 40.3623 36.5908 39.4497 37.5034C38.5372 38.4159 37.2995 38.9286 36.0089 38.9286C34.7183 38.9286 33.4806 38.4159 32.5681 37.5034C31.6555 36.5908 31.1428 35.3531 31.1428 34.0625C31.1428 32.772 31.6555 31.5343 32.5681 30.6217C33.4806 29.7092 34.7183 29.1965 36.0089 29.1965C37.2995 29.1965 38.5372 29.7092 39.4497 30.6217C40.3623 31.5343 40.875 32.772 40.875 34.0625ZM36.0089 59.3661C34.7183 59.3661 33.4806 58.8534 32.5681 57.9409C31.6555 57.0283 31.1428 55.7906 31.1428 54.5C31.1428 53.2095 31.6555 51.9718 32.5681 51.0592C33.4806 50.1467 34.7183 49.634 36.0089 49.634C37.2995 49.634 38.5372 50.1467 39.4497 51.0592C40.3623 51.9718 40.875 53.2095 40.875 54.5C40.875 55.7906 40.3623 57.0283 39.4497 57.9409C38.5372 58.8534 37.2995 59.3661 36.0089 59.3661ZM36.0089 79.8036C34.7183 79.8036 33.4806 79.2909 32.5681 78.3784C31.6555 77.4658 31.1428 76.2281 31.1428 74.9375C31.1428 73.647 31.6555 72.4093 32.5681 71.4967C33.4806 70.5841 34.7183 70.0715 36.0089 70.0715C37.2995 70.0715 38.5372 70.5841 39.4497 71.4967C40.3623 72.4093 40.875 73.647 40.875 74.9375C40.875 76.2281 40.3623 77.4658 39.4497 78.3784C38.5372 79.2909 37.2995 79.8036 36.0089 79.8036ZM49.6339 31.1429H74.9375C75.7118 31.1429 76.4544 31.4505 77.002 31.9981C77.5495 32.5456 77.8571 33.2882 77.8571 34.0625C77.8571 34.8369 77.5495 35.5795 77.002 36.127C76.4544 36.6746 75.7118 36.9822 74.9375 36.9822H49.6339C48.8596 36.9822 48.117 36.6746 47.5694 36.127C47.0219 35.5795 46.7143 34.8369 46.7143 34.0625C46.7143 33.2882 47.0219 32.5456 47.5694 31.9981C48.117 31.4505 48.8596 31.1429 49.6339 31.1429ZM46.7143 54.5C46.7143 53.7257 47.0219 52.9831 47.5694 52.4356C48.117 51.888 48.8596 51.5804 49.6339 51.5804H74.9375C75.7118 51.5804 76.4544 51.888 77.002 52.4356C77.5495 52.9831 77.8571 53.7257 77.8571 54.5C77.8571 55.2744 77.5495 56.017 77.002 56.5645C76.4544 57.1121 75.7118 57.4197 74.9375 57.4197H49.6339C48.8596 57.4197 48.117 57.1121 47.5694 56.5645C47.0219 56.017 46.7143 55.2744 46.7143 54.5ZM49.6339 72.0179H74.9375C75.7118 72.0179 76.4544 72.3255 77.002 72.873C77.5495 73.4206 77.8571 74.1632 77.8571 74.9375C77.8571 75.7119 77.5495 76.4545 77.002 77.002C76.4544 77.5496 75.7118 77.8572 74.9375 77.8572H49.6339C48.8596 77.8572 48.117 77.5496 47.5694 77.002C47.0219 76.4545 46.7143 75.7119 46.7143 74.9375C46.7143 74.1632 47.0219 73.4206 47.5694 72.873C48.117 72.3255 48.8596 72.0179 49.6339 72.0179ZM77.0007 100.358L100.358 77.0008C100.645 76.7335 100.875 76.4111 101.034 76.053C101.194 75.6949 101.28 75.3082 101.287 74.9162C101.294 74.5242 101.221 74.1348 101.075 73.7713C100.928 73.4077 100.709 73.0775 100.432 72.8002C100.155 72.523 99.8245 72.3044 99.4609 72.1576C99.0974 72.0107 98.708 71.9386 98.3159 71.9455C97.9239 71.9524 97.5373 72.0383 97.1792 72.1978C96.821 72.3574 96.4987 72.5875 96.2314 72.8743L74.9375 94.1683L65.3299 84.5607C64.7764 84.045 64.0444 83.7642 63.288 83.7775C62.5316 83.7909 61.81 84.0973 61.275 84.6322C60.7401 85.1672 60.4337 85.8888 60.4203 86.6452C60.407 87.4016 60.6878 88.1337 61.2035 88.6871L72.8743 100.358C73.4217 100.905 74.1638 101.212 74.9375 101.212C75.7112 101.212 76.4533 100.905 77.0007 100.358Z"
              className="fill-primary"
            />
          </svg>
          <div className="text-center">Small task</div>
        </div>
        <div className="grid grid-rows-2 place-content-center gap-y-1 sm:gap-y-2">
          <svg
            width="109"
            height="109"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_12_56)">
              <path
                d="M99.9167 19.3778L88.7139 8.17502C87.751 7.25692 86.4716 6.74475 85.1411 6.74475C83.8107 6.74475 82.5313 7.25692 81.5683 8.17502L71.6069 18.1667H18.1667C16.5606 18.1667 15.0204 18.8047 13.8847 19.9403C12.7491 21.076 12.1111 22.6162 12.1111 24.2222V90.8334C12.1111 92.4394 12.7491 93.9796 13.8847 95.1153C15.0204 96.2509 16.5606 96.8889 18.1667 96.8889H84.7778C86.3838 96.8889 87.9241 96.2509 89.0597 95.1153C90.1953 93.9796 90.8333 92.4394 90.8333 90.8334V35.6067L99.9167 26.5234C100.863 25.5753 101.395 24.2903 101.395 22.9506C101.395 21.6108 100.863 20.3258 99.9167 19.3778ZM57.0131 60.9492L44.3267 63.765L47.3544 51.1997L76.2697 22.2239L86.0494 32.0036L57.0131 60.9492ZM89.3194 28.552L79.5397 18.7722L85.1411 13.1708L94.9208 22.9506L89.3194 28.552Z"
                className="fill-primary"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_56">
                <rect width="109" height="109" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-center">Write it</div>
        </div>
        <div className="grid grid-rows-2 place-content-center gap-y-1 sm:gap-y-2">
          <svg
            width="109"
            height="109"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M81.75 49.9584C88.5171 49.9584 94.7846 52.093 99.9167 55.6809V36.3334C99.9167 31.2921 95.8746 27.25 90.8333 27.25H72.6667V18.1667C72.6667 13.1255 68.6246 9.08337 63.5833 9.08337H45.4167C40.3754 9.08337 36.3333 13.1255 36.3333 18.1667V27.25H18.1667C13.1254 27.25 9.12875 31.2921 9.12875 36.3334L9.08334 86.2917C9.08334 91.333 13.1254 95.375 18.1667 95.375H53.0467C50.7424 90.5314 49.7021 85.1833 50.0226 79.8291C50.3431 74.4749 52.014 69.289 54.8796 64.7548C57.7452 60.2207 61.7121 56.4859 66.4106 53.8986C71.1091 51.3113 76.3862 49.9558 81.75 49.9584ZM45.4167 18.1667H63.5833V27.25H45.4167V18.1667Z"
              className="fill-primary"
            />
            <path
              d="M81.75 59.0416C69.215 59.0416 59.0417 69.215 59.0417 81.75C59.0417 94.285 69.215 104.458 81.75 104.458C94.285 104.458 104.458 94.285 104.458 81.75C104.458 69.215 94.285 59.0416 81.75 59.0416ZM89.2437 92.4229L79.4792 82.6583V68.125H84.0208V80.7962L92.4229 89.1983L89.2437 92.4229Z"
              className="fill-primary"
            />
          </svg>
          <div className="text-center">Do it</div>
        </div>
        <div className="grid grid-rows-2 place-content-center gap-y-1 sm:gap-y-2">
          <svg
            width="109"
            height="109"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.375 54.5V27.25C95.375 22.2542 91.2875 18.1667 86.2917 18.1667H81.75V13.625C81.75 11.1271 79.7062 9.08337 77.2083 9.08337C74.7104 9.08337 72.6667 11.1271 72.6667 13.625V18.1667H36.3333V13.625C36.3333 11.1271 34.2896 9.08337 31.7917 9.08337C29.2937 9.08337 27.25 11.1271 27.25 13.625V18.1667H22.7083C17.7125 18.1667 13.625 22.2542 13.625 27.25V90.8334C13.625 95.8292 17.7125 99.9167 22.7083 99.9167H54.5V90.8334H22.7083V45.4167H86.2917V54.5H95.375ZM68.7154 90.8334C66.2175 90.8334 64.5825 93.3767 65.6271 95.6475C67.4192 99.6274 70.3228 103.005 73.9888 105.374C77.6547 107.742 81.927 109.002 86.2917 109C98.8267 109 109 98.8267 109 86.2917C109 73.7567 98.8267 63.5834 86.2917 63.5834C80.115 63.5834 74.4833 66.0813 70.3958 70.078V66.9896C70.3958 65.1275 68.8517 63.5834 66.9896 63.5834C65.1275 63.5834 63.5833 65.1275 63.5833 66.9896V77.2084C63.5833 79.7063 65.6271 81.75 68.125 81.75H78.3438C80.2058 81.75 81.75 80.2059 81.75 78.3438C81.75 76.4817 80.2058 74.9375 78.3438 74.9375H75.1646C78.0258 72.1217 81.9771 70.3959 86.2917 70.3959C95.0571 70.3959 102.188 77.5263 102.188 86.2917C102.188 95.0571 95.0571 102.188 86.2917 102.188C79.8425 102.188 74.3017 98.3271 71.8037 92.8317C71.5365 92.2362 71.1028 91.7308 70.5549 91.3762C70.0069 91.0216 69.3681 90.8331 68.7154 90.8334Z"
              className="fill-primary"
            />
          </svg>
          <div className="text-center">Repeat</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
