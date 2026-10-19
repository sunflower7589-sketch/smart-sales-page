import { createFileRoute } from "@tanstack/react-router";
import { Gift, Image, FileText, Video, Calendar, Check, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import speaker from "@/assets/speaker.jpg";
import styles from "@/assets/styles.jpg";

const REGISTER_URL = "#dang-ky";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Món quà tháng 10 – Trải nghiệm bộ Skill AI chỉ 5 USD" },
      { name: "description", content: "Trải nghiệm 12 Skill AI: tạo ảnh, viết SKKN, edit video tự động, kèm Zoom hướng dẫn cho người mới." },
      { property: "og:title", content: "Món quà tháng 10 – Bộ Skill AI 5 USD" },
      { property: "og:description", content: "12 Skill AI kèm buổi Zoom đồng hành cho người mới bắt đầu." },
    ],
  }),
  component: Index,
});

function Cta() {
  return (
    <a href={REGISTER_URL} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
      <Gift className="h-4 w-4" /> Nhận vé tham gia trải nghiệm và miễn phí bộ tài nguyên
    </a>
  );
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-wider text-primary">{children}</p>
);

const gifts = [
  { icon: Image, n: "10 SKILL", t: "Tạo ảnh siêu đẹp", d: "Chân dung áo dài, thời trang, studio chỉ từ một ảnh gốc." },
  { icon: FileText, n: "01 SKILL", t: "Viết SKKN chuyên nghiệp", d: "Hỗ trợ lên ý tưởng, cấu trúc và viết sáng kiến kinh nghiệm." },
  { icon: Video, n: "01 SKILL", t: "Edit video tự động", d: "Cắt ghép, phụ đề và dựng video nhanh bằng AI." },
];

const steps = [
  { t: "Đăng ký tham gia", d: "Đi tới trang đăng ký sự kiện 5 đô la." },
  { t: "Xem thông tin thanh toán", d: "Vé cá nhân 5 USD ≈ 135.000 VNĐ. Mã QR có tại trang đăng ký." },
  { t: "Nhận hướng dẫn trải nghiệm", d: "Gửi biên lai qua Zalo để được xác nhận và nhận Skill, lịch Zoom." },
];

function Index() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,var(--peach),transparent_60%)]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center">
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
          <Gift className="h-3 w-3" /> MÓN QUÀ THÁNG 10
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Một món quà nhỏ.<br />
          <span className="text-primary">Thêm cảm hứng làm việc cùng AI.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Sự kiện <b className="text-foreground">5 đô la</b> — trải nghiệm bộ Skill gửi gắm tâm huyết nghề nghiệp, cùng những buổi Zoom đồng hành cho cả người mới bắt đầu.
        </p>
        <div className="mt-7"><Cta /></div>
        <p className="mt-3 text-xs text-muted-foreground">12 Skill trong bộ trải nghiệm · Zoom hướng dẫn trong tháng 10</p>
        <img src={hero} width={1536} height={864} alt="Giáo viên làm việc cùng AI" className="mt-12 w-full rounded-3xl shadow-glow" />
      </section>

      {/* Gifts */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <Eyebrow>Mở bộ quà trải nghiệm</Eyebrow>
        <h2 className="mt-2 text-3xl font-extrabold">Chỉ 5 USD, bạn nhận được gì?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">Từ hình ảnh, nội dung chuyên môn đến video — cùng khám phá cách đưa AI vào công việc hằng ngày.</p>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {gifts.map((g) => (
            <div key={g.t} className="rounded-2xl border bg-card p-6 transition hover:shadow-glow">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-primary"><g.icon className="h-5 w-5" /></span>
                <span className="text-xs font-bold text-primary">{g.n}</span>
              </div>
              <h3 className="mt-5 font-bold">{g.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border bg-peach/60 p-8 text-left">
          <Eyebrow>10 Skill tạo ảnh siêu đẹp</Eyebrow>
          <h3 className="mt-2 text-2xl font-bold">Một gương mặt, nhiều phong cách</h3>
          <p className="mt-2 text-sm text-muted-foreground">Áo dài dịu dàng, thanh lịch tự nhiên đến chân dung studio.</p>
          <img src={styles} width={1536} height={640} loading="lazy" alt="Các phong cách ảnh AI" className="mt-6 w-full rounded-2xl" />
        </div>
      </section>

      {/* Companion */}
      <section className="bg-peach">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><Calendar className="h-4 w-4" /> Đồng hành trong tháng 10</p>
            <h2 className="mt-3 text-3xl font-extrabold">Mới biết đến AI?<br />Cùng bắt đầu nhé.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Các buổi Zoom trong tháng sẽ hướng dẫn thành viên tham gia. Dù chưa biết nhiều về AI, bạn vẫn có thể bắt đầu ngay.</p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="font-bold">Có bộ Skill, có người đồng hành</h3>
            {["Hướng dẫn dành cho thành viên sự kiện", "Phù hợp với người mới tìm hiểu AI", "Cùng sử dụng và chia sẻ trải nghiệm thực tế"].map((x) => (
              <p key={x} className="mt-3 flex gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{x}</p>
            ))}
            <p className="mt-5 border-t pt-4 text-xs text-muted-foreground">Lịch Zoom cụ thể sẽ được thông báo sau.</p>
          </div>
        </div>
      </section>

      {/* Speaker */}
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <img src={speaker} width={768} height={960} loading="lazy" alt="Diễn giả" className="mx-auto w-72 rounded-3xl shadow-glow" />
        <div>
          <Eyebrow>Người đồng hành cùng bạn</Eyebrow>
          <h2 className="mt-2 text-3xl font-extrabold">Diễn giả <span className="text-primary">Minh An AI Edu</span></h2>
          <p className="mt-3 text-sm text-muted-foreground">Người tiên phong trong lĩnh vực AI giáo dục và ứng dụng AI đa ngành, chia sẻ kinh nghiệm thực tế về cách dùng AI hiệu quả.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["AI giáo dục", "Ứng dụng AI đa ngành", "Kinh nghiệm thực tế"].map((t) => (
              <span key={t} className="rounded-full bg-peach px-3 py-1 text-xs font-medium text-primary">{t}</span>
            ))}
          </div>
          <div className="mt-8 border-t pt-6">
            <Eyebrow>Một lời nhắn</Eyebrow>
            <h3 className="mt-2 text-xl font-bold">Gói trong món quà nhỏ là rất nhiều tâm huyết.</h3>
            <p className="mt-3 text-sm italic text-muted-foreground">“Tháng 10 này, mình có một món quà trải nghiệm dành tặng mọi người. Mong bạn sử dụng thật hiệu quả và gửi feedback để mình nâng cấp, tạo thêm nhiều sản phẩm tốt hơn.”</p>
            <p className="mt-3 text-sm font-bold text-primary">Thân mến, Minh An ♡</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="dang-ky" className="bg-peach">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-3xl font-extrabold">Bắt đầu trải nghiệm</h2>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-2xl bg-card p-6">
                <p className="text-2xl font-extrabold text-primary">0{i + 1}</p>
                <h3 className="mt-3 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center">
        <Heart className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Bạn trải nghiệm.<br />Chúng tôi lắng nghe và nâng cấp.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">Cùng biến món quà tháng 10 thành những ứng dụng hữu ích trong công việc.</p>
        <div className="mt-8"><Cta /></div>
        <p className="mt-3 text-xs text-muted-foreground">Phí tham gia bộ trải nghiệm: 5 USD.</p>
      </section>
    </main>
  );
}
