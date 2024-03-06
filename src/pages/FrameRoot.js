import { Button } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const FrameRoot = () => {
  return (
    <div
      className="w-full h-full relative [background:linear-gradient(245.89deg,_#000,_#0e2204)] overflow-hidden flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border gap-[0px_24px] tracking-[normal] mq975:pl-6 mq975:pr-6 mq975:box-border"
      style={{ height: "100vh" }}
    >
      <FrameComponent1 />
      <main className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border w-full lg:w-2/3">
        <section className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full text-left text-21xl text-gray-500 font-alata">
          <FrameComponent />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[70px_0px] max-w-full mq700:gap-[70px_0px] mq700:min-w-full mq975:gap-[70px_0px]">
              <div
                className="w-[738px] flex flex-col items-start justify-center py-0 px-5 box-border max-w-full m 10"
                style={{ alignSelf: "center" }}
              >
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 h-7 relative text-inherit font-medium font-inherit flex items-center mq975:text-13xl mq450:text-5xl">
                    <span>
                      <span>{`Hello `}</span>
                      <span className="text-springgreen-100">Vipul,</span>
                    </span>
                  </h1>
                </div>
                <h1 className="pt-4 h-7 relative text-inherit font-normal font-inherit flex items-center mq975:text-13xl mq450:text-5xl">
                  How can I help you today?
                </h1>
              </div>
              <div
                className="w-[962px] flex flex-row items-start justify-start pt-0 px-[65px] pb-[29px] box-border max-w-full text-center text-base text-black font-avenir mq975:pl-8 mq975:pr-8 mq975:box-border"
                style={{ alignSelf: "center" }}
              >
                <div className="flex-1 flex flex-col items-start justify-start gap-[49px_0px] max-w-full mq450:gap-[49px_0px]">
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                    <div className="w-[752px] flex flex-row items-end justify-start gap-[0px_20px] max-w-full mq700:flex-wrap">
                      <div className="h-[349px] w-[231px] flex flex-col items-center justify-center gap-[16px_0px]">
                        <img
                          className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4545@2x.png"
                        />
                        <div className="w-[226px] rounded-lg bg-springgreen-100 flex flex-row items-center justify-center pt-[15px] px-px pb-4 box-border">
                          <img
                            className="h-[42px] w-[226px] relative rounded-lg hidden"
                            alt=""
                            src="/rectangle-4552.svg"
                          />
                          <div className="flex-1 relative tracking-[-0.02em] leading-[11px] font-extrabold z-[1] flex items-center justify-center">
                            ESG
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-[16px_0px] min-w-[162px]">
                        <div className="self-stretch h-[315px] relative rounded-2xl shrink-0 flex items-center justify-center">
                          <img
                            className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[0px] w-full [transform:scale(1.352)]"
                            loading="lazy"
                            alt=""
                            src="/rectangle-4543@2x.png"
                          />
                        </div>
                        <Button
                          className="self-stretch h-[42px] w-full"
                          disableElevation={true}
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "16",
                            background: "#42ff54",
                            borderRadius: "8px",
                            "&:hover": { background: "#42ff54" },
                            height: 42,
                          }}
                        >
                          Wealth Management
                        </Button>
                      </div>
                      <div className="h-[349px] w-[231px] flex flex-col items-center justify-center gap-[16px_0px]">
                        <img
                          className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4544@2x.png"
                        />
                        <div className="w-[226px] rounded-lg bg-springgreen-100 flex flex-row items-center justify-center pt-[15px] px-px pb-4 box-border whitespace-nowrap">
                          <div className="h-[42px] w-[226px] relative rounded-lg bg-springgreen-100 hidden" />
                          <div className="flex-1 relative tracking-[-0.02em] leading-[11px] font-extrabold z-[1] flex items-center justify-center">
                            Investment Management
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[745px] flex flex-col items-center justify-start gap-[2px_0px] max-w-full text-left">
                    <div className="flex flex-row items-start justify-start py-0 pr-1 pl-0">
                      <div className="relative tracking-[-0.02em] leading-[11px] font-medium">
                        Generate AI Image
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center mq700:flex-wrap">
                      <div className="w-56 relative tracking-[-0.02em] leading-[11px] font-medium flex items-center justify-center shrink-0">
                        Generate AI Software
                      </div>
                      <div className="w-56 relative tracking-[-0.02em] leading-[11px] font-medium flex items-center justify-center shrink-0">
                        Generate Investment Stats
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="self-stretch flex flex-row items-center justify-between py-[22px] pr-11 pl-9 relative gap-[20px] text-left text-base text-white font-alata mq975:pr-[22px] mq975:box-border mq450:flex-wrap"  style={{alignSelf:"center",width:"70vw"}}>
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[64px] bg-gray-600 [backdrop-filter:blur(4px)] box-border border-[1px] border-solid border-white" />
                <div className="relative leading-[11px] font-medium z-[1]">
                  Enter a prompt here...
                </div>
                <div className="flex flex-row items-start justify-start gap-[0px_24px]">
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0 min-h-[36px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/mdiimageaddoutline.svg"
                  />
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0 min-h-[36px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/fluentmic16regular.svg"
                  />
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FrameRoot;
