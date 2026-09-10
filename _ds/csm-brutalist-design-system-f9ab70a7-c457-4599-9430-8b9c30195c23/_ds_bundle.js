/* @ds-bundle: {"format":4,"namespace":"CSMBrutalistDesignSystem_f9ab70","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatBand","sourcePath":"components/data/StatBand.jsx"},{"name":"AccordionNav","sourcePath":"components/navigation/AccordionNav.jsx"},{"name":"NavTab","sourcePath":"components/navigation/NavTab.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"TeamCard","sourcePath":"components/people/TeamCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"9038ad72934d","components/core/Card.jsx":"486997c2c891","components/core/Tag.jsx":"afc82d00df1d","components/data/StatBand.jsx":"d0dd5f9e51b8","components/navigation/AccordionNav.jsx":"76f9e08aef2e","components/navigation/NavTab.jsx":"8c3faa33c848","components/overlay/Drawer.jsx":"bab29cb7d293","components/people/TeamCard.jsx":"03a008f3891b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CSMBrutalistDesignSystem_f9ab70 = window.CSMBrutalistDesignSystem_f9ab70 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  href,
  onClick,
  variant = 'indigo',
  shadow = 'md',
  as,
  ...rest
}) {
  const isLink = !!href;
  const Tag = as || (isLink ? 'a' : 'button');
  const palette = {
    indigo: {
      bg: 'var(--csmb-indigo)',
      color: '#fff',
      hoverBg: 'var(--csmb-ink)'
    },
    ink: {
      bg: 'var(--csmb-ink)',
      color: 'var(--csmb-paper)',
      hoverBg: 'var(--csmb-indigo)'
    },
    paper: {
      bg: 'var(--csmb-paper)',
      color: 'var(--csmb-ink)',
      hoverBg: 'var(--csmb-ink)'
    }
  }[variant];
  const shadowVar = shadow ? `var(--shadow-hard-${shadow})` : 'none';
  const [hover, setHover] = React.useState(false);
  return React.createElement(Tag, {
    href,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 'var(--tracking-wide)',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'var(--border-thick)',
      padding: '13px 22px',
      background: hover ? palette.hoverBg : palette.bg,
      color: variant === 'paper' && hover ? 'var(--csmb-paper)' : palette.color,
      boxShadow: shadowVar,
      transition: 'background .1s, color .1s'
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  inverse = false,
  shadow = null,
  padding = 'clamp(24px,3vw,36px) clamp(20px,3vw,36px)',
  style
}) {
  return React.createElement('div', {
    style: {
      background: inverse ? 'var(--csmb-indigo)' : 'var(--csmb-paper)',
      color: inverse ? '#fff' : 'var(--csmb-ink)',
      border: 'var(--border-thick)',
      boxShadow: shadow ? `var(--shadow-hard-${shadow})` : 'none',
      padding,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  variant = 'bracket'
}) {
  if (variant === 'bracket') {
    return React.createElement('span', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 'var(--tracking-label)'
      }
    }, `[ ${children} ]`);
  }
  // 'kicker' — numbered section eyebrow, e.g. "01 · SERVICES"
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--csmb-indigo)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBand.jsx
try { (() => {
function StatBand({
  stats
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px 64px',
      padding: '15px clamp(20px,3vw,40px)',
      background: 'var(--csmb-ink)',
      color: 'var(--csmb-paper)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, stats.map((s, i) => React.createElement('span', {
    key: i
  }, s)));
}
Object.assign(__ds_scope, { StatBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AccordionNav.jsx
try { (() => {
function AccordionNav({
  groups,
  openGroup,
  onToggle,
  selectedId,
  onSelectItem
}) {
  return React.createElement('div', {
    style: {
      border: 'var(--border-thick)',
      background: 'var(--csmb-paper)'
    }
  }, groups.map((g, gi) => React.createElement(React.Fragment, {
    key: gi
  }, React.createElement('div', {
    onClick: () => onToggle(g.name),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '15px 18px',
      cursor: 'pointer',
      background: 'var(--csmb-paper)',
      color: 'var(--csmb-ink)',
      borderBottom: 'var(--border-thin)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, g.name), React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement('span', {
    style: {
      fontSize: 12,
      fontWeight: 700
    }
  }, String(g.items.length).padStart(2, '0')), React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, openGroup === g.name ? '\u2212' : '+'))), openGroup === g.name && g.items.map((it, ii) => React.createElement('div', {
    key: ii,
    onClick: () => onSelectItem(it.id),
    style: {
      padding: '11px 18px 11px 26px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer',
      fontWeight: selectedId === it.id ? 700 : 500,
      color: selectedId === it.id ? '#fff' : 'var(--csmb-ink)',
      background: selectedId === it.id ? 'var(--csmb-indigo)' : 'var(--csmb-paper)',
      borderBottom: selectedId === it.id ? 'var(--border-thin)' : '1px solid var(--csmb-divider)'
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { AccordionNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AccordionNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavTab.jsx
try { (() => {
function NavTab({
  children,
  index,
  href = '#',
  active = false
}) {
  const [hover, setHover] = React.useState(false);
  const invert = hover || active;
  return React.createElement('a', {
    href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 20px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      background: invert ? 'var(--csmb-indigo)' : 'var(--csmb-paper)',
      color: invert ? '#fff' : 'var(--csmb-ink)',
      transition: 'background .1s, color .1s'
    }
  }, React.createElement('span', null, children), index != null && React.createElement('span', null, index));
}
Object.assign(__ds_scope, { NavTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavTab.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
function Drawer({
  open,
  onClose,
  kicker,
  title,
  photo,
  position = '50% 30%',
  children
}) {
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(22,21,27,.5)',
      zIndex: 50
    }
  }), React.createElement('div', {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(480px,100vw)',
      background: 'var(--csmb-paper)',
      zIndex: 51,
      overflowY: 'auto',
      borderLeft: 'var(--border-thick)',
      boxShadow: '-12px 0 0 rgba(22,21,27,.2)'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      height: 260,
      background: 'var(--csmb-canvas)',
      borderBottom: 'var(--border-thick)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, photo && React.createElement('img', {
    src: photo,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  })), React.createElement('button', {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 44,
      height: 44,
      border: 'var(--border-thick)',
      background: 'var(--csmb-paper)',
      color: 'var(--csmb-ink)',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, '\u2715')), React.createElement('div', {
    style: {
      padding: '28px 30px 40px'
    }
  }, kicker && React.createElement('div', {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.12em',
      color: 'var(--csmb-indigo)',
      textTransform: 'uppercase'
    }
  }, kicker), title && React.createElement('h3', {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      lineHeight: 1.15,
      textTransform: 'uppercase'
    }
  }, title), React.createElement('div', {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, children))));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/people/TeamCard.jsx
try { (() => {
function TeamCard({
  name,
  role,
  photo,
  position = '50% 30%',
  onClick,
  treatment = 'grayscale'
}) {
  const filter = treatment === 'color' ? 'none' : treatment === 'duotone' ? 'grayscale(1) contrast(1.12) sepia(.4) hue-rotate(215deg) saturate(2.2) brightness(1.02)' : 'grayscale(1) contrast(1.08)';
  const overlay = treatment === 'color' ? 0 : 0.08;
  return React.createElement('div', {
    onClick,
    style: {
      padding: '18px 16px 22px',
      background: 'var(--csmb-paper)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, React.createElement('div', {
    style: {
      aspectRatio: '1/1',
      background: 'var(--csmb-canvas)',
      overflow: 'hidden',
      border: 'var(--border-thin)',
      position: 'relative'
    }
  }, React.createElement('img', {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block',
      filter
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--csmb-indigo)',
      opacity: overlay,
      pointerEvents: 'none'
    }
  })), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: 1.3,
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--csmb-stone)',
      marginTop: 4,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, role)));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/TeamCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatBand = __ds_scope.StatBand;

__ds_ns.AccordionNav = __ds_scope.AccordionNav;

__ds_ns.NavTab = __ds_scope.NavTab;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.TeamCard = __ds_scope.TeamCard;

})();
