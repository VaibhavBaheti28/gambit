import { addMinutes, addSeconds, min } from "date-fns";
import nookies, { destroyCookie, parseCookies } from "nookies";
export interface Context {
  [key: string]: any;
}
function eraseCookieWithDomain(name: string) {
  if (typeof window !== undefined) {
    destroyCookie(null, name, {
      path: "/",
      domain: window.location?.hostname,
    });
  }
}

export function setCookie(
  name: string,
  value: string,
  minutes?: number,
  ctx?: Context
) {
  let exp: Date | undefined;

  if (minutes) {
    exp =
      minutes % 1 !== 0
        ? addSeconds(new Date(), minutes * 60)
        : addMinutes(new Date(), minutes);
  }

  eraseCookieWithDomain(name);
  nookies.set(ctx ?? null, name, value, {
    secure: true,
    expires: exp,
    sameSite: "none",
    path: "/",
  });
}

export function getCookie(name: string, ctx: Context) {
  if (ctx?.req?.cookies) return ctx.req.cookies[name] ?? "";
  const data = parseCookies(ctx ?? null);
  return data[name] ?? "";
}

export function exportCookie(name: string) {
  destroyCookie(null, name, { path: "/" });
}
