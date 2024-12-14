var App = (function (exports) {

  var react = {exports: {}};

  var react_development = {exports: {}};

  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  react_development.exports;

  var hasRequiredReact_development;

  function requireReact_development () {
  	if (hasRequiredReact_development) return react_development.exports;
  	hasRequiredReact_development = 1;
  	(function (module, exports) {
  		((function () {
  		    function defineDeprecationWarning(methodName, info) {
  		      Object.defineProperty(Component.prototype, methodName, {
  		        get: function () {
  		          console.warn(
  		            "%s(...) is deprecated in plain JavaScript React classes. %s",
  		            info[0],
  		            info[1]
  		          );
  		        }
  		      });
  		    }
  		    function getIteratorFn(maybeIterable) {
  		      if (null === maybeIterable || "object" !== typeof maybeIterable)
  		        return null;
  		      maybeIterable =
  		        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
  		        maybeIterable["@@iterator"];
  		      return "function" === typeof maybeIterable ? maybeIterable : null;
  		    }
  		    function warnNoop(publicInstance, callerName) {
  		      publicInstance =
  		        ((publicInstance = publicInstance.constructor) &&
  		          (publicInstance.displayName || publicInstance.name)) ||
  		        "ReactClass";
  		      var warningKey = publicInstance + "." + callerName;
  		      didWarnStateUpdateForUnmountedComponent[warningKey] ||
  		        (console.error(
  		          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
  		          callerName,
  		          publicInstance
  		        ),
  		        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
  		    }
  		    function Component(props, context, updater) {
  		      this.props = props;
  		      this.context = context;
  		      this.refs = emptyObject;
  		      this.updater = updater || ReactNoopUpdateQueue;
  		    }
  		    function ComponentDummy() {}
  		    function PureComponent(props, context, updater) {
  		      this.props = props;
  		      this.context = context;
  		      this.refs = emptyObject;
  		      this.updater = updater || ReactNoopUpdateQueue;
  		    }
  		    function testStringCoercion(value) {
  		      return "" + value;
  		    }
  		    function checkKeyStringCoercion(value) {
  		      try {
  		        testStringCoercion(value);
  		        var JSCompiler_inline_result = !1;
  		      } catch (e) {
  		        JSCompiler_inline_result = !0;
  		      }
  		      if (JSCompiler_inline_result) {
  		        JSCompiler_inline_result = console;
  		        var JSCompiler_temp_const = JSCompiler_inline_result.error;
  		        var JSCompiler_inline_result$jscomp$0 =
  		          ("function" === typeof Symbol &&
  		            Symbol.toStringTag &&
  		            value[Symbol.toStringTag]) ||
  		          value.constructor.name ||
  		          "Object";
  		        JSCompiler_temp_const.call(
  		          JSCompiler_inline_result,
  		          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
  		          JSCompiler_inline_result$jscomp$0
  		        );
  		        return testStringCoercion(value);
  		      }
  		    }
  		    function getComponentNameFromType(type) {
  		      if (null == type) return null;
  		      if ("function" === typeof type)
  		        return type.$$typeof === REACT_CLIENT_REFERENCE$2
  		          ? null
  		          : type.displayName || type.name || null;
  		      if ("string" === typeof type) return type;
  		      switch (type) {
  		        case REACT_FRAGMENT_TYPE:
  		          return "Fragment";
  		        case REACT_PORTAL_TYPE:
  		          return "Portal";
  		        case REACT_PROFILER_TYPE:
  		          return "Profiler";
  		        case REACT_STRICT_MODE_TYPE:
  		          return "StrictMode";
  		        case REACT_SUSPENSE_TYPE:
  		          return "Suspense";
  		        case REACT_SUSPENSE_LIST_TYPE:
  		          return "SuspenseList";
  		      }
  		      if ("object" === typeof type)
  		        switch (
  		          ("number" === typeof type.tag &&
  		            console.error(
  		              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
  		            ),
  		          type.$$typeof)
  		        ) {
  		          case REACT_CONTEXT_TYPE:
  		            return (type.displayName || "Context") + ".Provider";
  		          case REACT_CONSUMER_TYPE:
  		            return (type._context.displayName || "Context") + ".Consumer";
  		          case REACT_FORWARD_REF_TYPE:
  		            var innerType = type.render;
  		            type = type.displayName;
  		            type ||
  		              ((type = innerType.displayName || innerType.name || ""),
  		              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
  		            return type;
  		          case REACT_MEMO_TYPE:
  		            return (
  		              (innerType = type.displayName || null),
  		              null !== innerType
  		                ? innerType
  		                : getComponentNameFromType(type.type) || "Memo"
  		            );
  		          case REACT_LAZY_TYPE:
  		            innerType = type._payload;
  		            type = type._init;
  		            try {
  		              return getComponentNameFromType(type(innerType));
  		            } catch (x) {}
  		        }
  		      return null;
  		    }
  		    function isValidElementType(type) {
  		      return "string" === typeof type ||
  		        "function" === typeof type ||
  		        type === REACT_FRAGMENT_TYPE ||
  		        type === REACT_PROFILER_TYPE ||
  		        type === REACT_STRICT_MODE_TYPE ||
  		        type === REACT_SUSPENSE_TYPE ||
  		        type === REACT_SUSPENSE_LIST_TYPE ||
  		        type === REACT_OFFSCREEN_TYPE ||
  		        ("object" === typeof type &&
  		          null !== type &&
  		          (type.$$typeof === REACT_LAZY_TYPE ||
  		            type.$$typeof === REACT_MEMO_TYPE ||
  		            type.$$typeof === REACT_CONTEXT_TYPE ||
  		            type.$$typeof === REACT_CONSUMER_TYPE ||
  		            type.$$typeof === REACT_FORWARD_REF_TYPE ||
  		            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
  		            void 0 !== type.getModuleId))
  		        ? !0
  		        : !1;
  		    }
  		    function disabledLog() {}
  		    function disableLogs() {
  		      if (0 === disabledDepth) {
  		        prevLog = console.log;
  		        prevInfo = console.info;
  		        prevWarn = console.warn;
  		        prevError = console.error;
  		        prevGroup = console.group;
  		        prevGroupCollapsed = console.groupCollapsed;
  		        prevGroupEnd = console.groupEnd;
  		        var props = {
  		          configurable: !0,
  		          enumerable: !0,
  		          value: disabledLog,
  		          writable: !0
  		        };
  		        Object.defineProperties(console, {
  		          info: props,
  		          log: props,
  		          warn: props,
  		          error: props,
  		          group: props,
  		          groupCollapsed: props,
  		          groupEnd: props
  		        });
  		      }
  		      disabledDepth++;
  		    }
  		    function reenableLogs() {
  		      disabledDepth--;
  		      if (0 === disabledDepth) {
  		        var props = { configurable: !0, enumerable: !0, writable: !0 };
  		        Object.defineProperties(console, {
  		          log: assign({}, props, { value: prevLog }),
  		          info: assign({}, props, { value: prevInfo }),
  		          warn: assign({}, props, { value: prevWarn }),
  		          error: assign({}, props, { value: prevError }),
  		          group: assign({}, props, { value: prevGroup }),
  		          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
  		          groupEnd: assign({}, props, { value: prevGroupEnd })
  		        });
  		      }
  		      0 > disabledDepth &&
  		        console.error(
  		          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
  		        );
  		    }
  		    function describeBuiltInComponentFrame(name) {
  		      if (void 0 === prefix)
  		        try {
  		          throw Error();
  		        } catch (x) {
  		          var match = x.stack.trim().match(/\n( *(at )?)/);
  		          prefix = (match && match[1]) || "";
  		          suffix =
  		            -1 < x.stack.indexOf("\n    at")
  		              ? " (<anonymous>)"
  		              : -1 < x.stack.indexOf("@")
  		                ? "@unknown:0:0"
  		                : "";
  		        }
  		      return "\n" + prefix + name + suffix;
  		    }
  		    function describeNativeComponentFrame(fn, construct) {
  		      if (!fn || reentry) return "";
  		      var frame = componentFrameCache.get(fn);
  		      if (void 0 !== frame) return frame;
  		      reentry = !0;
  		      frame = Error.prepareStackTrace;
  		      Error.prepareStackTrace = void 0;
  		      var previousDispatcher = null;
  		      previousDispatcher = ReactSharedInternals.H;
  		      ReactSharedInternals.H = null;
  		      disableLogs();
  		      try {
  		        var RunInRootFrame = {
  		          DetermineComponentFrameRoot: function () {
  		            try {
  		              if (construct) {
  		                var Fake = function () {
  		                  throw Error();
  		                };
  		                Object.defineProperty(Fake.prototype, "props", {
  		                  set: function () {
  		                    throw Error();
  		                  }
  		                });
  		                if ("object" === typeof Reflect && Reflect.construct) {
  		                  try {
  		                    Reflect.construct(Fake, []);
  		                  } catch (x) {
  		                    var control = x;
  		                  }
  		                  Reflect.construct(fn, [], Fake);
  		                } else {
  		                  try {
  		                    Fake.call();
  		                  } catch (x$0) {
  		                    control = x$0;
  		                  }
  		                  fn.call(Fake.prototype);
  		                }
  		              } else {
  		                try {
  		                  throw Error();
  		                } catch (x$1) {
  		                  control = x$1;
  		                }
  		                (Fake = fn()) &&
  		                  "function" === typeof Fake.catch &&
  		                  Fake.catch(function () {});
  		              }
  		            } catch (sample) {
  		              if (sample && control && "string" === typeof sample.stack)
  		                return [sample.stack, control.stack];
  		            }
  		            return [null, null];
  		          }
  		        };
  		        RunInRootFrame.DetermineComponentFrameRoot.displayName =
  		          "DetermineComponentFrameRoot";
  		        var namePropDescriptor = Object.getOwnPropertyDescriptor(
  		          RunInRootFrame.DetermineComponentFrameRoot,
  		          "name"
  		        );
  		        namePropDescriptor &&
  		          namePropDescriptor.configurable &&
  		          Object.defineProperty(
  		            RunInRootFrame.DetermineComponentFrameRoot,
  		            "name",
  		            { value: "DetermineComponentFrameRoot" }
  		          );
  		        var _RunInRootFrame$Deter =
  		            RunInRootFrame.DetermineComponentFrameRoot(),
  		          sampleStack = _RunInRootFrame$Deter[0],
  		          controlStack = _RunInRootFrame$Deter[1];
  		        if (sampleStack && controlStack) {
  		          var sampleLines = sampleStack.split("\n"),
  		            controlLines = controlStack.split("\n");
  		          for (
  		            _RunInRootFrame$Deter = namePropDescriptor = 0;
  		            namePropDescriptor < sampleLines.length &&
  		            !sampleLines[namePropDescriptor].includes(
  		              "DetermineComponentFrameRoot"
  		            );

  		          )
  		            namePropDescriptor++;
  		          for (
  		            ;
  		            _RunInRootFrame$Deter < controlLines.length &&
  		            !controlLines[_RunInRootFrame$Deter].includes(
  		              "DetermineComponentFrameRoot"
  		            );

  		          )
  		            _RunInRootFrame$Deter++;
  		          if (
  		            namePropDescriptor === sampleLines.length ||
  		            _RunInRootFrame$Deter === controlLines.length
  		          )
  		            for (
  		              namePropDescriptor = sampleLines.length - 1,
  		                _RunInRootFrame$Deter = controlLines.length - 1;
  		              1 <= namePropDescriptor &&
  		              0 <= _RunInRootFrame$Deter &&
  		              sampleLines[namePropDescriptor] !==
  		                controlLines[_RunInRootFrame$Deter];

  		            )
  		              _RunInRootFrame$Deter--;
  		          for (
  		            ;
  		            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
  		            namePropDescriptor--, _RunInRootFrame$Deter--
  		          )
  		            if (
  		              sampleLines[namePropDescriptor] !==
  		              controlLines[_RunInRootFrame$Deter]
  		            ) {
  		              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
  		                do
  		                  if (
  		                    (namePropDescriptor--,
  		                    _RunInRootFrame$Deter--,
  		                    0 > _RunInRootFrame$Deter ||
  		                      sampleLines[namePropDescriptor] !==
  		                        controlLines[_RunInRootFrame$Deter])
  		                  ) {
  		                    var _frame =
  		                      "\n" +
  		                      sampleLines[namePropDescriptor].replace(
  		                        " at new ",
  		                        " at "
  		                      );
  		                    fn.displayName &&
  		                      _frame.includes("<anonymous>") &&
  		                      (_frame = _frame.replace("<anonymous>", fn.displayName));
  		                    "function" === typeof fn &&
  		                      componentFrameCache.set(fn, _frame);
  		                    return _frame;
  		                  }
  		                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
  		              }
  		              break;
  		            }
  		        }
  		      } finally {
  		        (reentry = !1),
  		          (ReactSharedInternals.H = previousDispatcher),
  		          reenableLogs(),
  		          (Error.prepareStackTrace = frame);
  		      }
  		      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
  		        ? describeBuiltInComponentFrame(sampleLines)
  		        : "";
  		      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
  		      return sampleLines;
  		    }
  		    function describeUnknownElementTypeFrameInDEV(type) {
  		      if (null == type) return "";
  		      if ("function" === typeof type) {
  		        var prototype = type.prototype;
  		        return describeNativeComponentFrame(
  		          type,
  		          !(!prototype || !prototype.isReactComponent)
  		        );
  		      }
  		      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
  		      switch (type) {
  		        case REACT_SUSPENSE_TYPE:
  		          return describeBuiltInComponentFrame("Suspense");
  		        case REACT_SUSPENSE_LIST_TYPE:
  		          return describeBuiltInComponentFrame("SuspenseList");
  		      }
  		      if ("object" === typeof type)
  		        switch (type.$$typeof) {
  		          case REACT_FORWARD_REF_TYPE:
  		            return (type = describeNativeComponentFrame(type.render, !1)), type;
  		          case REACT_MEMO_TYPE:
  		            return describeUnknownElementTypeFrameInDEV(type.type);
  		          case REACT_LAZY_TYPE:
  		            prototype = type._payload;
  		            type = type._init;
  		            try {
  		              return describeUnknownElementTypeFrameInDEV(type(prototype));
  		            } catch (x) {}
  		        }
  		      return "";
  		    }
  		    function getOwner() {
  		      var dispatcher = ReactSharedInternals.A;
  		      return null === dispatcher ? null : dispatcher.getOwner();
  		    }
  		    function hasValidKey(config) {
  		      if (hasOwnProperty.call(config, "key")) {
  		        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
  		        if (getter && getter.isReactWarning) return !1;
  		      }
  		      return void 0 !== config.key;
  		    }
  		    function defineKeyPropWarningGetter(props, displayName) {
  		      function warnAboutAccessingKey() {
  		        specialPropKeyWarningShown ||
  		          ((specialPropKeyWarningShown = !0),
  		          console.error(
  		            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
  		            displayName
  		          ));
  		      }
  		      warnAboutAccessingKey.isReactWarning = !0;
  		      Object.defineProperty(props, "key", {
  		        get: warnAboutAccessingKey,
  		        configurable: !0
  		      });
  		    }
  		    function elementRefGetterWithDeprecationWarning() {
  		      var componentName = getComponentNameFromType(this.type);
  		      didWarnAboutElementRef[componentName] ||
  		        ((didWarnAboutElementRef[componentName] = !0),
  		        console.error(
  		          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
  		        ));
  		      componentName = this.props.ref;
  		      return void 0 !== componentName ? componentName : null;
  		    }
  		    function ReactElement(type, key, self, source, owner, props) {
  		      self = props.ref;
  		      type = {
  		        $$typeof: REACT_ELEMENT_TYPE,
  		        type: type,
  		        key: key,
  		        props: props,
  		        _owner: owner
  		      };
  		      null !== (void 0 !== self ? self : null)
  		        ? Object.defineProperty(type, "ref", {
  		            enumerable: !1,
  		            get: elementRefGetterWithDeprecationWarning
  		          })
  		        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
  		      type._store = {};
  		      Object.defineProperty(type._store, "validated", {
  		        configurable: !1,
  		        enumerable: !1,
  		        writable: !0,
  		        value: 0
  		      });
  		      Object.defineProperty(type, "_debugInfo", {
  		        configurable: !1,
  		        enumerable: !1,
  		        writable: !0,
  		        value: null
  		      });
  		      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
  		      return type;
  		    }
  		    function cloneAndReplaceKey(oldElement, newKey) {
  		      newKey = ReactElement(
  		        oldElement.type,
  		        newKey,
  		        void 0,
  		        void 0,
  		        oldElement._owner,
  		        oldElement.props
  		      );
  		      newKey._store.validated = oldElement._store.validated;
  		      return newKey;
  		    }
  		    function validateChildKeys(node, parentType) {
  		      if (
  		        "object" === typeof node &&
  		        node &&
  		        node.$$typeof !== REACT_CLIENT_REFERENCE
  		      )
  		        if (isArrayImpl(node))
  		          for (var i = 0; i < node.length; i++) {
  		            var child = node[i];
  		            isValidElement(child) && validateExplicitKey(child, parentType);
  		          }
  		        else if (isValidElement(node))
  		          node._store && (node._store.validated = 1);
  		        else if (
  		          ((i = getIteratorFn(node)),
  		          "function" === typeof i &&
  		            i !== node.entries &&
  		            ((i = i.call(node)), i !== node))
  		        )
  		          for (; !(node = i.next()).done; )
  		            isValidElement(node.value) &&
  		              validateExplicitKey(node.value, parentType);
  		    }
  		    function isValidElement(object) {
  		      return (
  		        "object" === typeof object &&
  		        null !== object &&
  		        object.$$typeof === REACT_ELEMENT_TYPE
  		      );
  		    }
  		    function validateExplicitKey(element, parentType) {
  		      if (
  		        element._store &&
  		        !element._store.validated &&
  		        null == element.key &&
  		        ((element._store.validated = 1),
  		        (parentType = getCurrentComponentErrorInfo(parentType)),
  		        !ownerHasKeyUseWarning[parentType])
  		      ) {
  		        ownerHasKeyUseWarning[parentType] = !0;
  		        var childOwner = "";
  		        element &&
  		          null != element._owner &&
  		          element._owner !== getOwner() &&
  		          ((childOwner = null),
  		          "number" === typeof element._owner.tag
  		            ? (childOwner = getComponentNameFromType(element._owner.type))
  		            : "string" === typeof element._owner.name &&
  		              (childOwner = element._owner.name),
  		          (childOwner = " It was passed a child from " + childOwner + "."));
  		        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
  		        ReactSharedInternals.getCurrentStack = function () {
  		          var stack = describeUnknownElementTypeFrameInDEV(element.type);
  		          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
  		          return stack;
  		        };
  		        console.error(
  		          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
  		          parentType,
  		          childOwner
  		        );
  		        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
  		      }
  		    }
  		    function getCurrentComponentErrorInfo(parentType) {
  		      var info = "",
  		        owner = getOwner();
  		      owner &&
  		        (owner = getComponentNameFromType(owner.type)) &&
  		        (info = "\n\nCheck the render method of `" + owner + "`.");
  		      info ||
  		        ((parentType = getComponentNameFromType(parentType)) &&
  		          (info =
  		            "\n\nCheck the top-level render call using <" + parentType + ">."));
  		      return info;
  		    }
  		    function escape(key) {
  		      var escaperLookup = { "=": "=0", ":": "=2" };
  		      return (
  		        "$" +
  		        key.replace(/[=:]/g, function (match) {
  		          return escaperLookup[match];
  		        })
  		      );
  		    }
  		    function getElementKey(element, index) {
  		      return "object" === typeof element &&
  		        null !== element &&
  		        null != element.key
  		        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
  		        : index.toString(36);
  		    }
  		    function noop$1() {}
  		    function resolveThenable(thenable) {
  		      switch (thenable.status) {
  		        case "fulfilled":
  		          return thenable.value;
  		        case "rejected":
  		          throw thenable.reason;
  		        default:
  		          switch (
  		            ("string" === typeof thenable.status
  		              ? thenable.then(noop$1, noop$1)
  		              : ((thenable.status = "pending"),
  		                thenable.then(
  		                  function (fulfilledValue) {
  		                    "pending" === thenable.status &&
  		                      ((thenable.status = "fulfilled"),
  		                      (thenable.value = fulfilledValue));
  		                  },
  		                  function (error) {
  		                    "pending" === thenable.status &&
  		                      ((thenable.status = "rejected"),
  		                      (thenable.reason = error));
  		                  }
  		                )),
  		            thenable.status)
  		          ) {
  		            case "fulfilled":
  		              return thenable.value;
  		            case "rejected":
  		              throw thenable.reason;
  		          }
  		      }
  		      throw thenable;
  		    }
  		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  		      var type = typeof children;
  		      if ("undefined" === type || "boolean" === type) children = null;
  		      var invokeCallback = !1;
  		      if (null === children) invokeCallback = !0;
  		      else
  		        switch (type) {
  		          case "bigint":
  		          case "string":
  		          case "number":
  		            invokeCallback = !0;
  		            break;
  		          case "object":
  		            switch (children.$$typeof) {
  		              case REACT_ELEMENT_TYPE:
  		              case REACT_PORTAL_TYPE:
  		                invokeCallback = !0;
  		                break;
  		              case REACT_LAZY_TYPE:
  		                return (
  		                  (invokeCallback = children._init),
  		                  mapIntoArray(
  		                    invokeCallback(children._payload),
  		                    array,
  		                    escapedPrefix,
  		                    nameSoFar,
  		                    callback
  		                  )
  		                );
  		            }
  		        }
  		      if (invokeCallback) {
  		        invokeCallback = children;
  		        callback = callback(invokeCallback);
  		        var childKey =
  		          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
  		        isArrayImpl(callback)
  		          ? ((escapedPrefix = ""),
  		            null != childKey &&
  		              (escapedPrefix =
  		                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
  		            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
  		              return c;
  		            }))
  		          : null != callback &&
  		            (isValidElement(callback) &&
  		              (null != callback.key &&
  		                ((invokeCallback && invokeCallback.key === callback.key) ||
  		                  checkKeyStringCoercion(callback.key)),
  		              (escapedPrefix = cloneAndReplaceKey(
  		                callback,
  		                escapedPrefix +
  		                  (null == callback.key ||
  		                  (invokeCallback && invokeCallback.key === callback.key)
  		                    ? ""
  		                    : ("" + callback.key).replace(
  		                        userProvidedKeyEscapeRegex,
  		                        "$&/"
  		                      ) + "/") +
  		                  childKey
  		              )),
  		              "" !== nameSoFar &&
  		                null != invokeCallback &&
  		                isValidElement(invokeCallback) &&
  		                null == invokeCallback.key &&
  		                invokeCallback._store &&
  		                !invokeCallback._store.validated &&
  		                (escapedPrefix._store.validated = 2),
  		              (callback = escapedPrefix)),
  		            array.push(callback));
  		        return 1;
  		      }
  		      invokeCallback = 0;
  		      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
  		      if (isArrayImpl(children))
  		        for (var i = 0; i < children.length; i++)
  		          (nameSoFar = children[i]),
  		            (type = childKey + getElementKey(nameSoFar, i)),
  		            (invokeCallback += mapIntoArray(
  		              nameSoFar,
  		              array,
  		              escapedPrefix,
  		              type,
  		              callback
  		            ));
  		      else if (((i = getIteratorFn(children)), "function" === typeof i))
  		        for (
  		          i === children.entries &&
  		            (didWarnAboutMaps ||
  		              console.warn(
  		                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
  		              ),
  		            (didWarnAboutMaps = !0)),
  		            children = i.call(children),
  		            i = 0;
  		          !(nameSoFar = children.next()).done;

  		        )
  		          (nameSoFar = nameSoFar.value),
  		            (type = childKey + getElementKey(nameSoFar, i++)),
  		            (invokeCallback += mapIntoArray(
  		              nameSoFar,
  		              array,
  		              escapedPrefix,
  		              type,
  		              callback
  		            ));
  		      else if ("object" === type) {
  		        if ("function" === typeof children.then)
  		          return mapIntoArray(
  		            resolveThenable(children),
  		            array,
  		            escapedPrefix,
  		            nameSoFar,
  		            callback
  		          );
  		        array = String(children);
  		        throw Error(
  		          "Objects are not valid as a React child (found: " +
  		            ("[object Object]" === array
  		              ? "object with keys {" + Object.keys(children).join(", ") + "}"
  		              : array) +
  		            "). If you meant to render a collection of children, use an array instead."
  		        );
  		      }
  		      return invokeCallback;
  		    }
  		    function mapChildren(children, func, context) {
  		      if (null == children) return children;
  		      var result = [],
  		        count = 0;
  		      mapIntoArray(children, result, "", "", function (child) {
  		        return func.call(context, child, count++);
  		      });
  		      return result;
  		    }
  		    function lazyInitializer(payload) {
  		      if (-1 === payload._status) {
  		        var ctor = payload._result;
  		        ctor = ctor();
  		        ctor.then(
  		          function (moduleObject) {
  		            if (0 === payload._status || -1 === payload._status)
  		              (payload._status = 1), (payload._result = moduleObject);
  		          },
  		          function (error) {
  		            if (0 === payload._status || -1 === payload._status)
  		              (payload._status = 2), (payload._result = error);
  		          }
  		        );
  		        -1 === payload._status &&
  		          ((payload._status = 0), (payload._result = ctor));
  		      }
  		      if (1 === payload._status)
  		        return (
  		          (ctor = payload._result),
  		          void 0 === ctor &&
  		            console.error(
  		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
  		              ctor
  		            ),
  		          "default" in ctor ||
  		            console.error(
  		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
  		              ctor
  		            ),
  		          ctor.default
  		        );
  		      throw payload._result;
  		    }
  		    function resolveDispatcher() {
  		      var dispatcher = ReactSharedInternals.H;
  		      null === dispatcher &&
  		        console.error(
  		          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
  		        );
  		      return dispatcher;
  		    }
  		    function noop() {}
  		    function enqueueTask(task) {
  		      if (null === enqueueTaskImpl)
  		        try {
  		          var requireString = ("require" + Math.random()).slice(0, 7);
  		          enqueueTaskImpl = (module && module[requireString]).call(
  		            module,
  		            "timers"
  		          ).setImmediate;
  		        } catch (_err) {
  		          enqueueTaskImpl = function (callback) {
  		            !1 === didWarnAboutMessageChannel &&
  		              ((didWarnAboutMessageChannel = !0),
  		              "undefined" === typeof MessageChannel &&
  		                console.error(
  		                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
  		                ));
  		            var channel = new MessageChannel();
  		            channel.port1.onmessage = callback;
  		            channel.port2.postMessage(void 0);
  		          };
  		        }
  		      return enqueueTaskImpl(task);
  		    }
  		    function aggregateErrors(errors) {
  		      return 1 < errors.length && "function" === typeof AggregateError
  		        ? new AggregateError(errors)
  		        : errors[0];
  		    }
  		    function popActScope(prevActQueue, prevActScopeDepth) {
  		      prevActScopeDepth !== actScopeDepth - 1 &&
  		        console.error(
  		          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
  		        );
  		      actScopeDepth = prevActScopeDepth;
  		    }
  		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  		      var queue = ReactSharedInternals.actQueue;
  		      if (null !== queue)
  		        if (0 !== queue.length)
  		          try {
  		            flushActQueue(queue);
  		            enqueueTask(function () {
  		              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
  		            });
  		            return;
  		          } catch (error) {
  		            ReactSharedInternals.thrownErrors.push(error);
  		          }
  		        else ReactSharedInternals.actQueue = null;
  		      0 < ReactSharedInternals.thrownErrors.length
  		        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
  		          (ReactSharedInternals.thrownErrors.length = 0),
  		          reject(queue))
  		        : resolve(returnValue);
  		    }
  		    function flushActQueue(queue) {
  		      if (!isFlushing) {
  		        isFlushing = !0;
  		        var i = 0;
  		        try {
  		          for (; i < queue.length; i++) {
  		            var callback = queue[i];
  		            do {
  		              ReactSharedInternals.didUsePromise = !1;
  		              var continuation = callback(!1);
  		              if (null !== continuation) {
  		                if (ReactSharedInternals.didUsePromise) {
  		                  queue[i] = callback;
  		                  queue.splice(0, i);
  		                  return;
  		                }
  		                callback = continuation;
  		              } else break;
  		            } while (1);
  		          }
  		          queue.length = 0;
  		        } catch (error) {
  		          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
  		        } finally {
  		          isFlushing = !1;
  		        }
  		      }
  		    }
  		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  		      "function" ===
  		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
  		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
  		    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  		      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  		      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  		      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  		      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  		    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  		      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  		      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  		      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  		      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  		      REACT_MEMO_TYPE = Symbol.for("react.memo"),
  		      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  		      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
  		      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
  		      didWarnStateUpdateForUnmountedComponent = {},
  		      ReactNoopUpdateQueue = {
  		        isMounted: function () {
  		          return !1;
  		        },
  		        enqueueForceUpdate: function (publicInstance) {
  		          warnNoop(publicInstance, "forceUpdate");
  		        },
  		        enqueueReplaceState: function (publicInstance) {
  		          warnNoop(publicInstance, "replaceState");
  		        },
  		        enqueueSetState: function (publicInstance) {
  		          warnNoop(publicInstance, "setState");
  		        }
  		      },
  		      assign = Object.assign,
  		      emptyObject = {};
  		    Object.freeze(emptyObject);
  		    Component.prototype.isReactComponent = {};
  		    Component.prototype.setState = function (partialState, callback) {
  		      if (
  		        "object" !== typeof partialState &&
  		        "function" !== typeof partialState &&
  		        null != partialState
  		      )
  		        throw Error(
  		          "takes an object of state variables to update or a function which returns an object of state variables."
  		        );
  		      this.updater.enqueueSetState(this, partialState, callback, "setState");
  		    };
  		    Component.prototype.forceUpdate = function (callback) {
  		      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
  		    };
  		    var deprecatedAPIs = {
  		        isMounted: [
  		          "isMounted",
  		          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
  		        ],
  		        replaceState: [
  		          "replaceState",
  		          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
  		        ]
  		      },
  		      fnName;
  		    for (fnName in deprecatedAPIs)
  		      deprecatedAPIs.hasOwnProperty(fnName) &&
  		        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
  		    ComponentDummy.prototype = Component.prototype;
  		    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
  		    deprecatedAPIs.constructor = PureComponent;
  		    assign(deprecatedAPIs, Component.prototype);
  		    deprecatedAPIs.isPureReactComponent = !0;
  		    var isArrayImpl = Array.isArray,
  		      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
  		      ReactSharedInternals = {
  		        H: null,
  		        A: null,
  		        T: null,
  		        S: null,
  		        actQueue: null,
  		        isBatchingLegacy: !1,
  		        didScheduleLegacyUpdate: !1,
  		        didUsePromise: !1,
  		        thrownErrors: [],
  		        getCurrentStack: null
  		      },
  		      hasOwnProperty = Object.prototype.hasOwnProperty,
  		      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
  		      disabledDepth = 0,
  		      prevLog,
  		      prevInfo,
  		      prevWarn,
  		      prevError,
  		      prevGroup,
  		      prevGroupCollapsed,
  		      prevGroupEnd;
  		    disabledLog.__reactDisabledLog = !0;
  		    var prefix,
  		      suffix,
  		      reentry = !1;
  		    var componentFrameCache = new (
  		      "function" === typeof WeakMap ? WeakMap : Map
  		    )();
  		    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
  		      specialPropKeyWarningShown,
  		      didWarnAboutOldJSXRuntime;
  		    var didWarnAboutElementRef = {};
  		    var ownerHasKeyUseWarning = {},
  		      didWarnAboutMaps = !1,
  		      userProvidedKeyEscapeRegex = /\/+/g,
  		      reportGlobalError =
  		        "function" === typeof reportError
  		          ? reportError
  		          : function (error) {
  		              if (
  		                "object" === typeof window &&
  		                "function" === typeof window.ErrorEvent
  		              ) {
  		                var event = new window.ErrorEvent("error", {
  		                  bubbles: !0,
  		                  cancelable: !0,
  		                  message:
  		                    "object" === typeof error &&
  		                    null !== error &&
  		                    "string" === typeof error.message
  		                      ? String(error.message)
  		                      : String(error),
  		                  error: error
  		                });
  		                if (!window.dispatchEvent(event)) return;
  		              } else if (
  		                "object" === typeof process &&
  		                "function" === typeof process.emit
  		              ) {
  		                process.emit("uncaughtException", error);
  		                return;
  		              }
  		              console.error(error);
  		            },
  		      didWarnAboutMessageChannel = !1,
  		      enqueueTaskImpl = null,
  		      actScopeDepth = 0,
  		      didWarnNoAwaitAct = !1,
  		      isFlushing = !1,
  		      queueSeveralMicrotasks =
  		        "function" === typeof queueMicrotask
  		          ? function (callback) {
  		              queueMicrotask(function () {
  		                return queueMicrotask(callback);
  		              });
  		            }
  		          : enqueueTask;
  		    exports.Children = {
  		      map: mapChildren,
  		      forEach: function (children, forEachFunc, forEachContext) {
  		        mapChildren(
  		          children,
  		          function () {
  		            forEachFunc.apply(this, arguments);
  		          },
  		          forEachContext
  		        );
  		      },
  		      count: function (children) {
  		        var n = 0;
  		        mapChildren(children, function () {
  		          n++;
  		        });
  		        return n;
  		      },
  		      toArray: function (children) {
  		        return (
  		          mapChildren(children, function (child) {
  		            return child;
  		          }) || []
  		        );
  		      },
  		      only: function (children) {
  		        if (!isValidElement(children))
  		          throw Error(
  		            "React.Children.only expected to receive a single React element child."
  		          );
  		        return children;
  		      }
  		    };
  		    exports.Component = Component;
  		    exports.Fragment = REACT_FRAGMENT_TYPE;
  		    exports.Profiler = REACT_PROFILER_TYPE;
  		    exports.PureComponent = PureComponent;
  		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
  		    exports.Suspense = REACT_SUSPENSE_TYPE;
  		    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  		      ReactSharedInternals;
  		    exports.act = function (callback) {
  		      var prevActQueue = ReactSharedInternals.actQueue,
  		        prevActScopeDepth = actScopeDepth;
  		      actScopeDepth++;
  		      var queue = (ReactSharedInternals.actQueue =
  		          null !== prevActQueue ? prevActQueue : []),
  		        didAwaitActCall = !1;
  		      try {
  		        var result = callback();
  		      } catch (error) {
  		        ReactSharedInternals.thrownErrors.push(error);
  		      }
  		      if (0 < ReactSharedInternals.thrownErrors.length)
  		        throw (
  		          (popActScope(prevActQueue, prevActScopeDepth),
  		          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
  		          (ReactSharedInternals.thrownErrors.length = 0),
  		          callback)
  		        );
  		      if (
  		        null !== result &&
  		        "object" === typeof result &&
  		        "function" === typeof result.then
  		      ) {
  		        var thenable = result;
  		        queueSeveralMicrotasks(function () {
  		          didAwaitActCall ||
  		            didWarnNoAwaitAct ||
  		            ((didWarnNoAwaitAct = !0),
  		            console.error(
  		              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
  		            ));
  		        });
  		        return {
  		          then: function (resolve, reject) {
  		            didAwaitActCall = !0;
  		            thenable.then(
  		              function (returnValue) {
  		                popActScope(prevActQueue, prevActScopeDepth);
  		                if (0 === prevActScopeDepth) {
  		                  try {
  		                    flushActQueue(queue),
  		                      enqueueTask(function () {
  		                        return recursivelyFlushAsyncActWork(
  		                          returnValue,
  		                          resolve,
  		                          reject
  		                        );
  		                      });
  		                  } catch (error$2) {
  		                    ReactSharedInternals.thrownErrors.push(error$2);
  		                  }
  		                  if (0 < ReactSharedInternals.thrownErrors.length) {
  		                    var _thrownError = aggregateErrors(
  		                      ReactSharedInternals.thrownErrors
  		                    );
  		                    ReactSharedInternals.thrownErrors.length = 0;
  		                    reject(_thrownError);
  		                  }
  		                } else resolve(returnValue);
  		              },
  		              function (error) {
  		                popActScope(prevActQueue, prevActScopeDepth);
  		                0 < ReactSharedInternals.thrownErrors.length
  		                  ? ((error = aggregateErrors(
  		                      ReactSharedInternals.thrownErrors
  		                    )),
  		                    (ReactSharedInternals.thrownErrors.length = 0),
  		                    reject(error))
  		                  : reject(error);
  		              }
  		            );
  		          }
  		        };
  		      }
  		      var returnValue$jscomp$0 = result;
  		      popActScope(prevActQueue, prevActScopeDepth);
  		      0 === prevActScopeDepth &&
  		        (flushActQueue(queue),
  		        0 !== queue.length &&
  		          queueSeveralMicrotasks(function () {
  		            didAwaitActCall ||
  		              didWarnNoAwaitAct ||
  		              ((didWarnNoAwaitAct = !0),
  		              console.error(
  		                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
  		              ));
  		          }),
  		        (ReactSharedInternals.actQueue = null));
  		      if (0 < ReactSharedInternals.thrownErrors.length)
  		        throw (
  		          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
  		          (ReactSharedInternals.thrownErrors.length = 0),
  		          callback)
  		        );
  		      return {
  		        then: function (resolve, reject) {
  		          didAwaitActCall = !0;
  		          0 === prevActScopeDepth
  		            ? ((ReactSharedInternals.actQueue = queue),
  		              enqueueTask(function () {
  		                return recursivelyFlushAsyncActWork(
  		                  returnValue$jscomp$0,
  		                  resolve,
  		                  reject
  		                );
  		              }))
  		            : resolve(returnValue$jscomp$0);
  		        }
  		      };
  		    };
  		    exports.cache = function (fn) {
  		      return function () {
  		        return fn.apply(null, arguments);
  		      };
  		    };
  		    exports.cloneElement = function (element, config, children) {
  		      if (null === element || void 0 === element)
  		        throw Error(
  		          "The argument must be a React element, but you passed " +
  		            element +
  		            "."
  		        );
  		      var props = assign({}, element.props),
  		        key = element.key,
  		        owner = element._owner;
  		      if (null != config) {
  		        var JSCompiler_inline_result;
  		        a: {
  		          if (
  		            hasOwnProperty.call(config, "ref") &&
  		            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
  		              config,
  		              "ref"
  		            ).get) &&
  		            JSCompiler_inline_result.isReactWarning
  		          ) {
  		            JSCompiler_inline_result = !1;
  		            break a;
  		          }
  		          JSCompiler_inline_result = void 0 !== config.ref;
  		        }
  		        JSCompiler_inline_result && (owner = getOwner());
  		        hasValidKey(config) &&
  		          (checkKeyStringCoercion(config.key), (key = "" + config.key));
  		        for (propName in config)
  		          !hasOwnProperty.call(config, propName) ||
  		            "key" === propName ||
  		            "__self" === propName ||
  		            "__source" === propName ||
  		            ("ref" === propName && void 0 === config.ref) ||
  		            (props[propName] = config[propName]);
  		      }
  		      var propName = arguments.length - 2;
  		      if (1 === propName) props.children = children;
  		      else if (1 < propName) {
  		        JSCompiler_inline_result = Array(propName);
  		        for (var i = 0; i < propName; i++)
  		          JSCompiler_inline_result[i] = arguments[i + 2];
  		        props.children = JSCompiler_inline_result;
  		      }
  		      props = ReactElement(element.type, key, void 0, void 0, owner, props);
  		      for (key = 2; key < arguments.length; key++)
  		        validateChildKeys(arguments[key], props.type);
  		      return props;
  		    };
  		    exports.createContext = function (defaultValue) {
  		      defaultValue = {
  		        $$typeof: REACT_CONTEXT_TYPE,
  		        _currentValue: defaultValue,
  		        _currentValue2: defaultValue,
  		        _threadCount: 0,
  		        Provider: null,
  		        Consumer: null
  		      };
  		      defaultValue.Provider = defaultValue;
  		      defaultValue.Consumer = {
  		        $$typeof: REACT_CONSUMER_TYPE,
  		        _context: defaultValue
  		      };
  		      defaultValue._currentRenderer = null;
  		      defaultValue._currentRenderer2 = null;
  		      return defaultValue;
  		    };
  		    exports.createElement = function (type, config, children) {
  		      if (isValidElementType(type))
  		        for (var i = 2; i < arguments.length; i++)
  		          validateChildKeys(arguments[i], type);
  		      else {
  		        i = "";
  		        if (
  		          void 0 === type ||
  		          ("object" === typeof type &&
  		            null !== type &&
  		            0 === Object.keys(type).length)
  		        )
  		          i +=
  		            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
  		        if (null === type) var typeString = "null";
  		        else
  		          isArrayImpl(type)
  		            ? (typeString = "array")
  		            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
  		              ? ((typeString =
  		                  "<" +
  		                  (getComponentNameFromType(type.type) || "Unknown") +
  		                  " />"),
  		                (i =
  		                  " Did you accidentally export a JSX literal instead of a component?"))
  		              : (typeString = typeof type);
  		        console.error(
  		          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
  		          typeString,
  		          i
  		        );
  		      }
  		      var propName;
  		      i = {};
  		      typeString = null;
  		      if (null != config)
  		        for (propName in (didWarnAboutOldJSXRuntime ||
  		          !("__self" in config) ||
  		          "key" in config ||
  		          ((didWarnAboutOldJSXRuntime = !0),
  		          console.warn(
  		            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
  		          )),
  		        hasValidKey(config) &&
  		          (checkKeyStringCoercion(config.key), (typeString = "" + config.key)),
  		        config))
  		          hasOwnProperty.call(config, propName) &&
  		            "key" !== propName &&
  		            "__self" !== propName &&
  		            "__source" !== propName &&
  		            (i[propName] = config[propName]);
  		      var childrenLength = arguments.length - 2;
  		      if (1 === childrenLength) i.children = children;
  		      else if (1 < childrenLength) {
  		        for (
  		          var childArray = Array(childrenLength), _i = 0;
  		          _i < childrenLength;
  		          _i++
  		        )
  		          childArray[_i] = arguments[_i + 2];
  		        Object.freeze && Object.freeze(childArray);
  		        i.children = childArray;
  		      }
  		      if (type && type.defaultProps)
  		        for (propName in ((childrenLength = type.defaultProps), childrenLength))
  		          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
  		      typeString &&
  		        defineKeyPropWarningGetter(
  		          i,
  		          "function" === typeof type
  		            ? type.displayName || type.name || "Unknown"
  		            : type
  		        );
  		      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
  		    };
  		    exports.createRef = function () {
  		      var refObject = { current: null };
  		      Object.seal(refObject);
  		      return refObject;
  		    };
  		    exports.forwardRef = function (render) {
  		      null != render && render.$$typeof === REACT_MEMO_TYPE
  		        ? console.error(
  		            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
  		          )
  		        : "function" !== typeof render
  		          ? console.error(
  		              "forwardRef requires a render function but was given %s.",
  		              null === render ? "null" : typeof render
  		            )
  		          : 0 !== render.length &&
  		            2 !== render.length &&
  		            console.error(
  		              "forwardRef render functions accept exactly two parameters: props and ref. %s",
  		              1 === render.length
  		                ? "Did you forget to use the ref parameter?"
  		                : "Any additional parameter will be undefined."
  		            );
  		      null != render &&
  		        null != render.defaultProps &&
  		        console.error(
  		          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
  		        );
  		      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
  		        ownName;
  		      Object.defineProperty(elementType, "displayName", {
  		        enumerable: !1,
  		        configurable: !0,
  		        get: function () {
  		          return ownName;
  		        },
  		        set: function (name) {
  		          ownName = name;
  		          render.name ||
  		            render.displayName ||
  		            (Object.defineProperty(render, "name", { value: name }),
  		            (render.displayName = name));
  		        }
  		      });
  		      return elementType;
  		    };
  		    exports.isValidElement = isValidElement;
  		    exports.lazy = function (ctor) {
  		      return {
  		        $$typeof: REACT_LAZY_TYPE,
  		        _payload: { _status: -1, _result: ctor },
  		        _init: lazyInitializer
  		      };
  		    };
  		    exports.memo = function (type, compare) {
  		      isValidElementType(type) ||
  		        console.error(
  		          "memo: The first argument must be a component. Instead received: %s",
  		          null === type ? "null" : typeof type
  		        );
  		      compare = {
  		        $$typeof: REACT_MEMO_TYPE,
  		        type: type,
  		        compare: void 0 === compare ? null : compare
  		      };
  		      var ownName;
  		      Object.defineProperty(compare, "displayName", {
  		        enumerable: !1,
  		        configurable: !0,
  		        get: function () {
  		          return ownName;
  		        },
  		        set: function (name) {
  		          ownName = name;
  		          type.name ||
  		            type.displayName ||
  		            (Object.defineProperty(type, "name", { value: name }),
  		            (type.displayName = name));
  		        }
  		      });
  		      return compare;
  		    };
  		    exports.startTransition = function (scope) {
  		      var prevTransition = ReactSharedInternals.T,
  		        currentTransition = {};
  		      ReactSharedInternals.T = currentTransition;
  		      currentTransition._updatedFibers = new Set();
  		      try {
  		        var returnValue = scope(),
  		          onStartTransitionFinish = ReactSharedInternals.S;
  		        null !== onStartTransitionFinish &&
  		          onStartTransitionFinish(currentTransition, returnValue);
  		        "object" === typeof returnValue &&
  		          null !== returnValue &&
  		          "function" === typeof returnValue.then &&
  		          returnValue.then(noop, reportGlobalError);
  		      } catch (error) {
  		        reportGlobalError(error);
  		      } finally {
  		        null === prevTransition &&
  		          currentTransition._updatedFibers &&
  		          ((scope = currentTransition._updatedFibers.size),
  		          currentTransition._updatedFibers.clear(),
  		          10 < scope &&
  		            console.warn(
  		              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
  		            )),
  		          (ReactSharedInternals.T = prevTransition);
  		      }
  		    };
  		    exports.unstable_useCacheRefresh = function () {
  		      return resolveDispatcher().useCacheRefresh();
  		    };
  		    exports.use = function (usable) {
  		      return resolveDispatcher().use(usable);
  		    };
  		    exports.useActionState = function (action, initialState, permalink) {
  		      return resolveDispatcher().useActionState(
  		        action,
  		        initialState,
  		        permalink
  		      );
  		    };
  		    exports.useCallback = function (callback, deps) {
  		      return resolveDispatcher().useCallback(callback, deps);
  		    };
  		    exports.useContext = function (Context) {
  		      var dispatcher = resolveDispatcher();
  		      Context.$$typeof === REACT_CONSUMER_TYPE &&
  		        console.error(
  		          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
  		        );
  		      return dispatcher.useContext(Context);
  		    };
  		    exports.useDebugValue = function (value, formatterFn) {
  		      return resolveDispatcher().useDebugValue(value, formatterFn);
  		    };
  		    exports.useDeferredValue = function (value, initialValue) {
  		      return resolveDispatcher().useDeferredValue(value, initialValue);
  		    };
  		    exports.useEffect = function (create, deps) {
  		      return resolveDispatcher().useEffect(create, deps);
  		    };
  		    exports.useId = function () {
  		      return resolveDispatcher().useId();
  		    };
  		    exports.useImperativeHandle = function (ref, create, deps) {
  		      return resolveDispatcher().useImperativeHandle(ref, create, deps);
  		    };
  		    exports.useInsertionEffect = function (create, deps) {
  		      return resolveDispatcher().useInsertionEffect(create, deps);
  		    };
  		    exports.useLayoutEffect = function (create, deps) {
  		      return resolveDispatcher().useLayoutEffect(create, deps);
  		    };
  		    exports.useMemo = function (create, deps) {
  		      return resolveDispatcher().useMemo(create, deps);
  		    };
  		    exports.useOptimistic = function (passthrough, reducer) {
  		      return resolveDispatcher().useOptimistic(passthrough, reducer);
  		    };
  		    exports.useReducer = function (reducer, initialArg, init) {
  		      return resolveDispatcher().useReducer(reducer, initialArg, init);
  		    };
  		    exports.useRef = function (initialValue) {
  		      return resolveDispatcher().useRef(initialValue);
  		    };
  		    exports.useState = function (initialState) {
  		      return resolveDispatcher().useState(initialState);
  		    };
  		    exports.useSyncExternalStore = function (
  		      subscribe,
  		      getSnapshot,
  		      getServerSnapshot
  		    ) {
  		      return resolveDispatcher().useSyncExternalStore(
  		        subscribe,
  		        getSnapshot,
  		        getServerSnapshot
  		      );
  		    };
  		    exports.useTransition = function () {
  		      return resolveDispatcher().useTransition();
  		    };
  		    exports.version = "19.0.0";
  		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  		      "function" ===
  		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
  		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  		  }))(); 
  	} (react_development, react_development.exports));
  	return react_development.exports;
  }

  var hasRequiredReact;

  function requireReact () {
  	if (hasRequiredReact) return react.exports;
  	hasRequiredReact = 1;

  	{
  	  react.exports = requireReact_development();
  	}
  	return react.exports;
  }

  var reactExports = requireReact();

  /**
   * @fileoverview Class definition for the HeyGen Video Translation Client Library
   *
   * This file is a part of the HeyGen Video Translation Client Library, which provides access to a server endpoint for processing video translation requests with HeyGen
   *
   * Usage:
   * - Import or require this module to access its functionality.
   * - Example usage:
   *   ```javascript
   *   import TranslationClient from 'heygen-translation-client';
   *   const client = new TranslationClient();
   *   const status = client.getStatus(); // <-- Updated automatically through React state
   *   TranslationClient.requestTranslation(serverUrl, videoId);
   *   ```
   *
   * @module HeyGen Video Translation Client Library
   * @version 1.0.0
   * @license MIT
   * @author Elijah Claggett
   * @contact elijah.claggett@gmail.com
   */
  /**
   * Description placeholder
   *
   * @class TranslationClient
   * @typedef {TranslationClient}
   */
  class TranslationClient {
      /**
       * Creates an instance of TranslationClient.
       *
       * @constructor
       */
      constructor() {
          // Track request status in the React state
          [this.status, this.setStatus] = reactExports.useState('{"result": "none"}');
          // Track request status in an instantaneously updated variable
          this.statusInstant = '{"result": "none"}';
      }
      /**
       * Function to request a translation from the server
       *
       * @returns {() => void}
       */
      requestTranslation(serverUrl, videoId) {
          // Initialize an EventSource to watch for server-sent events tracking the progress of our translation request
          const eventSource = new EventSource(serverUrl);
          this.statusInstant = '{"result": "none"}';
          this.setStatus(this.statusInstant);
          // Update the request status when we receive a message from the server
          eventSource.onmessage = (event) => {
              this.setStatus(event.data);
              this.statusInstant = event.data;
          };
          // Update the request status when we receive an error from the server, or when the connection is terminated
          eventSource.onerror = (error) => {
              // If the request has not completed but we encounter an error or the connection is closed, record the error
              if (this.statusInstant != '{"result": "completed"}')
                  this.setStatus('{"result": "error"}');
              // If the connection is closed by the server but the request has been completed, that's fine
              if (error.eventPhase == EventSource.CLOSED) {
                  eventSource.close();
              }
              else {
                  // If any other error occurs, record it
                  this.setStatus('{"result": "error"}');
              }
          };
          // Close the connection when the React component unloads
          return () => {
              eventSource.close();
          };
      }
      /**
       * Function to access the status of the translation request externally
       *
       * @returns {string}
       */
      getStatus() {
          return this.status;
      }
  }

  exports.TranslationClient = TranslationClient;

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwiLi4vc3JjL2NsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcobWV0aG9kTmFtZSwgaW5mbykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCIlcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlc1wiLFxuICAgICAgICAgICAgaW5mb1swXSxcbiAgICAgICAgICAgIGluZm9bMV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgICBpZiAobnVsbCA9PT0gbWF5YmVJdGVyYWJsZSB8fCBcIm9iamVjdFwiICE9PSB0eXBlb2YgbWF5YmVJdGVyYWJsZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBtYXliZUl0ZXJhYmxlID1cbiAgICAgICAgKE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICAgIG1heWJlSXRlcmFibGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG1heWJlSXRlcmFibGUgPyBtYXliZUl0ZXJhYmxlIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAgICAgIHB1YmxpY0luc3RhbmNlID1cbiAgICAgICAgKChwdWJsaWNJbnN0YW5jZSA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yKSAmJlxuICAgICAgICAgIChwdWJsaWNJbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCBwdWJsaWNJbnN0YW5jZS5uYW1lKSkgfHxcbiAgICAgICAgXCJSZWFjdENsYXNzXCI7XG4gICAgICB2YXIgd2FybmluZ0tleSA9IHB1YmxpY0luc3RhbmNlICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuICAgICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldIHx8XG4gICAgICAgIChjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgIGNsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC5cIixcbiAgICAgICAgICBjYWxsZXJOYW1lLFxuICAgICAgICAgIHB1YmxpY0luc3RhbmNlXG4gICAgICAgICksXG4gICAgICAgIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSAhMCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbiAgICBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITA7XG4gICAgICB9XG4gICAgICBpZiAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0KSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IGNvbnNvbGU7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX3RlbXBfY29uc3QgPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQuZXJyb3I7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDAgPVxuICAgICAgICAgIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBTeW1ib2wgJiZcbiAgICAgICAgICAgIFN5bWJvbC50b1N0cmluZ1RhZyAmJlxuICAgICAgICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSkgfHxcbiAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8XG4gICAgICAgICAgXCJPYmplY3RcIjtcbiAgICAgICAgSlNDb21waWxlcl90ZW1wX2NvbnN0LmNhbGwoXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LFxuICAgICAgICAgIFwiVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLiBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgdXNpbmcgaXQgaGVyZS5cIixcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gICAgICBpZiAobnVsbCA9PSB0eXBlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICByZXR1cm4gdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSQyXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlKSByZXR1cm4gdHlwZTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiRnJhZ21lbnRcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJQb3J0YWxcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlByb2ZpbGVyXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdHJpY3RNb2RlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZVwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZUxpc3RcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAoXCJudW1iZXJcIiA9PT0gdHlwZW9mIHR5cGUudGFnICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgdHlwZS4kJHR5cGVvZilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuUHJvdmlkZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlNVTUVSX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuX2NvbnRleHQuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuQ29uc3VtZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICB2YXIgaW5uZXJUeXBlID0gdHlwZS5yZW5kZXI7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHR5cGUgfHxcbiAgICAgICAgICAgICAgKCh0eXBlID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8IFwiXCIpLFxuICAgICAgICAgICAgICAodHlwZSA9IFwiXCIgIT09IHR5cGUgPyBcIkZvcndhcmRSZWYoXCIgKyB0eXBlICsgXCIpXCIgOiBcIkZvcndhcmRSZWZcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAoaW5uZXJUeXBlID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsKSxcbiAgICAgICAgICAgICAgbnVsbCAhPT0gaW5uZXJUeXBlXG4gICAgICAgICAgICAgICAgPyBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA6IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8IFwiTWVtb1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgaW5uZXJUeXBlID0gdHlwZS5fcGF5bG9hZDtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLl9pbml0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKGlubmVyVHlwZSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGUgfHxcbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZSB8fFxuICAgICAgICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHxcbiAgICAgICAgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fFxuICAgICAgICB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fFxuICAgICAgICB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fFxuICAgICAgICAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUgJiZcbiAgICAgICAgICBudWxsICE9PSB0eXBlICYmXG4gICAgICAgICAgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8XG4gICAgICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHxcbiAgICAgICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlNVTUVSX1RZUEUgfHxcbiAgICAgICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgICAgICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UkMSB8fFxuICAgICAgICAgICAgdm9pZCAwICE9PSB0eXBlLmdldE1vZHVsZUlkKSlcbiAgICAgICAgPyAhMFxuICAgICAgICA6ICExO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG4gICAgZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gICAgICBpZiAoMCA9PT0gZGlzYWJsZWREZXB0aCkge1xuICAgICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDtcbiAgICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICAgIHdyaXRhYmxlOiAhMFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkaXNhYmxlZERlcHRoKys7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAgICAgIGRpc2FibGVkRGVwdGgtLTtcbiAgICAgIGlmICgwID09PSBkaXNhYmxlZERlcHRoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHsgY29uZmlndXJhYmxlOiAhMCwgZW51bWVyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7IHZhbHVlOiBwcmV2TG9nIH0pLFxuICAgICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZJbmZvIH0pLFxuICAgICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZXYXJuIH0pLFxuICAgICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7IHZhbHVlOiBwcmV2RXJyb3IgfSksXG4gICAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZHcm91cCB9KSxcbiAgICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywgeyB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkIH0pLFxuICAgICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7IHZhbHVlOiBwcmV2R3JvdXBFbmQgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAwID4gZGlzYWJsZWREZXB0aCAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiXG4gICAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IHByZWZpeClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgICBwcmVmaXggPSAobWF0Y2ggJiYgbWF0Y2hbMV0pIHx8IFwiXCI7XG4gICAgICAgICAgc3VmZml4ID1cbiAgICAgICAgICAgIC0xIDwgeC5zdGFjay5pbmRleE9mKFwiXFxuICAgIGF0XCIpXG4gICAgICAgICAgICAgID8gXCIgKDxhbm9ueW1vdXM+KVwiXG4gICAgICAgICAgICAgIDogLTEgPCB4LnN0YWNrLmluZGV4T2YoXCJAXCIpXG4gICAgICAgICAgICAgICAgPyBcIkB1bmtub3duOjA6MFwiXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gXCJcXG5cIiArIHByZWZpeCArIG5hbWUgKyBzdWZmaXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAgICAgaWYgKCFmbiB8fCByZWVudHJ5KSByZXR1cm4gXCJcIjtcbiAgICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcbiAgICAgIGlmICh2b2lkIDAgIT09IGZyYW1lKSByZXR1cm4gZnJhbWU7XG4gICAgICByZWVudHJ5ID0gITA7XG4gICAgICBmcmFtZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlO1xuICAgICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB2b2lkIDA7XG4gICAgICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyID0gbnVsbDtcbiAgICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkg7XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscy5IID0gbnVsbDtcbiAgICAgIGRpc2FibGVMb2dzKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgUnVuSW5Sb290RnJhbWUgPSB7XG4gICAgICAgICAgRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCBcInByb3BzXCIsIHtcbiAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgUmVmbGVjdCAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJvbCA9IHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHgkMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sID0geCQwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHgkMSkge1xuICAgICAgICAgICAgICAgICAgY29udHJvbCA9IHgkMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKEZha2UgPSBmbigpKSAmJlxuICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgRmFrZS5jYXRjaCAmJlxuICAgICAgICAgICAgICAgICAgRmFrZS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgICAgICAgICAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHNhbXBsZS5zdGFjaylcbiAgICAgICAgICAgICAgICByZXR1cm4gW3NhbXBsZS5zdGFjaywgY29udHJvbC5zdGFja107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUnVuSW5Sb290RnJhbWUuRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290LmRpc3BsYXlOYW1lID1cbiAgICAgICAgICBcIkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdFwiO1xuICAgICAgICB2YXIgbmFtZVByb3BEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICBSdW5JblJvb3RGcmFtZS5EZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3QsXG4gICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgKTtcbiAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yICYmXG4gICAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAmJlxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgIFJ1bkluUm9vdEZyYW1lLkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdCxcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJEZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3RcIiB9XG4gICAgICAgICAgKTtcbiAgICAgICAgdmFyIF9SdW5JblJvb3RGcmFtZSREZXRlciA9XG4gICAgICAgICAgICBSdW5JblJvb3RGcmFtZS5EZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3QoKSxcbiAgICAgICAgICBzYW1wbGVTdGFjayA9IF9SdW5JblJvb3RGcmFtZSREZXRlclswXSxcbiAgICAgICAgICBjb250cm9sU3RhY2sgPSBfUnVuSW5Sb290RnJhbWUkRGV0ZXJbMV07XG4gICAgICAgIGlmIChzYW1wbGVTdGFjayAmJiBjb250cm9sU3RhY2spIHtcbiAgICAgICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGVTdGFjay5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgICAgIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2xTdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyID0gbmFtZVByb3BEZXNjcmlwdG9yID0gMDtcbiAgICAgICAgICAgIG5hbWVQcm9wRGVzY3JpcHRvciA8IHNhbXBsZUxpbmVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgIXNhbXBsZUxpbmVzW25hbWVQcm9wRGVzY3JpcHRvcl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgIFwiRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290XCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICApXG4gICAgICAgICAgICBuYW1lUHJvcERlc2NyaXB0b3IrKztcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyIDwgY29udHJvbExpbmVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgIWNvbnRyb2xMaW5lc1tfUnVuSW5Sb290RnJhbWUkRGV0ZXJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICBcIkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgKVxuICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyKys7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yID09PSBzYW1wbGVMaW5lcy5sZW5ndGggfHxcbiAgICAgICAgICAgIF9SdW5JblJvb3RGcmFtZSREZXRlciA9PT0gY29udHJvbExpbmVzLmxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgIG5hbWVQcm9wRGVzY3JpcHRvciA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIDEgPD0gbmFtZVByb3BEZXNjcmlwdG9yICYmXG4gICAgICAgICAgICAgIDAgPD0gX1J1bkluUm9vdEZyYW1lJERldGVyICYmXG4gICAgICAgICAgICAgIHNhbXBsZUxpbmVzW25hbWVQcm9wRGVzY3JpcHRvcl0gIT09XG4gICAgICAgICAgICAgICAgY29udHJvbExpbmVzW19SdW5JblJvb3RGcmFtZSREZXRlcl07XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyLS07XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIDEgPD0gbmFtZVByb3BEZXNjcmlwdG9yICYmIDAgPD0gX1J1bkluUm9vdEZyYW1lJERldGVyO1xuICAgICAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yLS0sIF9SdW5JblJvb3RGcmFtZSREZXRlci0tXG4gICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzYW1wbGVMaW5lc1tuYW1lUHJvcERlc2NyaXB0b3JdICE9PVxuICAgICAgICAgICAgICBjb250cm9sTGluZXNbX1J1bkluUm9vdEZyYW1lJERldGVyXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICgxICE9PSBuYW1lUHJvcERlc2NyaXB0b3IgfHwgMSAhPT0gX1J1bkluUm9vdEZyYW1lJERldGVyKSB7XG4gICAgICAgICAgICAgICAgZG9cbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKG5hbWVQcm9wRGVzY3JpcHRvci0tLFxuICAgICAgICAgICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXItLSxcbiAgICAgICAgICAgICAgICAgICAgMCA+IF9SdW5JblJvb3RGcmFtZSREZXRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZUxpbmVzW25hbWVQcm9wRGVzY3JpcHRvcl0gIT09XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sTGluZXNbX1J1bkluUm9vdEZyYW1lJERldGVyXSlcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVMaW5lc1tuYW1lUHJvcERlc2NyaXB0b3JdLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBhdCBuZXcgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBhdCBcIlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGZuLmRpc3BsYXlOYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgX2ZyYW1lLmluY2x1ZGVzKFwiPGFub255bW91cz5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoXCI8YW5vbnltb3VzPlwiLCBmbi5kaXNwbGF5TmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBmbiAmJlxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlICgxIDw9IG5hbWVQcm9wRGVzY3JpcHRvciAmJiAwIDw9IF9SdW5JblJvb3RGcmFtZSREZXRlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIChyZWVudHJ5ID0gITEpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5IID0gcHJldmlvdXNEaXNwYXRjaGVyKSxcbiAgICAgICAgICByZWVuYWJsZUxvZ3MoKSxcbiAgICAgICAgICAoRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBmcmFtZSk7XG4gICAgICB9XG4gICAgICBzYW1wbGVMaW5lcyA9IChzYW1wbGVMaW5lcyA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6IFwiXCIpXG4gICAgICAgID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoc2FtcGxlTGluZXMpXG4gICAgICAgIDogXCJcIjtcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGZuICYmIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzYW1wbGVMaW5lcyk7XG4gICAgICByZXR1cm4gc2FtcGxlTGluZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlKSB7XG4gICAgICBpZiAobnVsbCA9PSB0eXBlKSByZXR1cm4gXCJcIjtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlKSB7XG4gICAgICAgIHZhciBwcm90b3R5cGUgPSB0eXBlLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAhKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlKSByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShcIlN1c3BlbnNlXCIpO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoXCJTdXNwZW5zZUxpc3RcIik7XG4gICAgICB9XG4gICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZSA9IGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIsICExKSksIHR5cGU7XG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSk7XG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICBwcm90b3R5cGUgPSB0eXBlLl9wYXlsb2FkO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuX2luaXQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUocHJvdG90eXBlKSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T3duZXIoKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkE7XG4gICAgICByZXR1cm4gbnVsbCA9PT0gZGlzcGF0Y2hlciA/IG51bGwgOiBkaXNwYXRjaGVyLmdldE93bmVyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBcImtleVwiKSkge1xuICAgICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsIFwia2V5XCIpLmdldDtcbiAgICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbmZpZy5rZXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICAgICAgZnVuY3Rpb24gd2FybkFib3V0QWNjZXNzaW5nS2V5KCkge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biB8fFxuICAgICAgICAgICgoc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSAhMCksXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSB2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50IHByb3AuIChodHRwczovL3JlYWN0LmRldi9saW5rL3NwZWNpYWwtcHJvcHMpXCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICkpO1xuICAgICAgfVxuICAgICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gITA7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsIFwia2V5XCIsIHtcbiAgICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZygpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHRoaXMudHlwZSk7XG4gICAgICBkaWRXYXJuQWJvdXRFbGVtZW50UmVmW2NvbXBvbmVudE5hbWVdIHx8XG4gICAgICAgICgoZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSA9ICEwKSxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkFjY2Vzc2luZyBlbGVtZW50LnJlZiB3YXMgcmVtb3ZlZCBpbiBSZWFjdCAxOS4gcmVmIGlzIG5vdyBhIHJlZ3VsYXIgcHJvcC4gSXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIEpTWCBFbGVtZW50IHR5cGUgaW4gYSBmdXR1cmUgcmVsZWFzZS5cIlxuICAgICAgICApKTtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSB0aGlzLnByb3BzLnJlZjtcbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbXBvbmVudE5hbWUgPyBjb21wb25lbnROYW1lIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgICAgIHNlbGYgPSBwcm9wcy5yZWY7XG4gICAgICB0eXBlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICBfb3duZXI6IG93bmVyXG4gICAgICB9O1xuICAgICAgbnVsbCAhPT0gKHZvaWQgMCAhPT0gc2VsZiA/IHNlbGYgOiBudWxsKVxuICAgICAgICA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgIGdldDogZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmdcbiAgICAgICAgICB9KVxuICAgICAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7IGVudW1lcmFibGU6ICExLCB2YWx1ZTogbnVsbCB9KTtcbiAgICAgIHR5cGUuX3N0b3JlID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZS5fc3RvcmUsIFwidmFsaWRhdGVkXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnSW5mb1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5mcmVlemUgJiYgKE9iamVjdC5mcmVlemUodHlwZS5wcm9wcyksIE9iamVjdC5mcmVlemUodHlwZSkpO1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgICAgIG5ld0tleSA9IFJlYWN0RWxlbWVudChcbiAgICAgICAgb2xkRWxlbWVudC50eXBlLFxuICAgICAgICBuZXdLZXksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBvbGRFbGVtZW50Ll9vd25lcixcbiAgICAgICAgb2xkRWxlbWVudC5wcm9wc1xuICAgICAgKTtcbiAgICAgIG5ld0tleS5fc3RvcmUudmFsaWRhdGVkID0gb2xkRWxlbWVudC5fc3RvcmUudmFsaWRhdGVkO1xuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygbm9kZSAmJlxuICAgICAgICBub2RlICYmXG4gICAgICAgIG5vZGUuJCR0eXBlb2YgIT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0VcbiAgICAgIClcbiAgICAgICAgaWYgKGlzQXJyYXlJbXBsKG5vZGUpKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgICAgICAgIGlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKVxuICAgICAgICAgIG5vZGUuX3N0b3JlICYmIChub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSAxKTtcbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgKChpID0gZ2V0SXRlcmF0b3JGbihub2RlKSksXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgaSAmJlxuICAgICAgICAgICAgaSAhPT0gbm9kZS5lbnRyaWVzICYmXG4gICAgICAgICAgICAoKGkgPSBpLmNhbGwobm9kZSkpLCBpICE9PSBub2RlKSlcbiAgICAgICAgKVxuICAgICAgICAgIGZvciAoOyAhKG5vZGUgPSBpLm5leHQoKSkuZG9uZTsgKVxuICAgICAgICAgICAgaXNWYWxpZEVsZW1lbnQobm9kZS52YWx1ZSkgJiZcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShub2RlLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygb2JqZWN0ICYmXG4gICAgICAgIG51bGwgIT09IG9iamVjdCAmJlxuICAgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsZW1lbnQuX3N0b3JlICYmXG4gICAgICAgICFlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgJiZcbiAgICAgICAgbnVsbCA9PSBlbGVtZW50LmtleSAmJlxuICAgICAgICAoKGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IDEpLFxuICAgICAgICAocGFyZW50VHlwZSA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkpLFxuICAgICAgICAhb3duZXJIYXNLZXlVc2VXYXJuaW5nW3BhcmVudFR5cGVdKVxuICAgICAgKSB7XG4gICAgICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1twYXJlbnRUeXBlXSA9ICEwO1xuICAgICAgICB2YXIgY2hpbGRPd25lciA9IFwiXCI7XG4gICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICBudWxsICE9IGVsZW1lbnQuX293bmVyICYmXG4gICAgICAgICAgZWxlbWVudC5fb3duZXIgIT09IGdldE93bmVyKCkgJiZcbiAgICAgICAgICAoKGNoaWxkT3duZXIgPSBudWxsKSxcbiAgICAgICAgICBcIm51bWJlclwiID09PSB0eXBlb2YgZWxlbWVudC5fb3duZXIudGFnXG4gICAgICAgICAgICA/IChjaGlsZE93bmVyID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpKVxuICAgICAgICAgICAgOiBcInN0cmluZ1wiID09PSB0eXBlb2YgZWxlbWVudC5fb3duZXIubmFtZSAmJlxuICAgICAgICAgICAgICAoY2hpbGRPd25lciA9IGVsZW1lbnQuX293bmVyLm5hbWUpLFxuICAgICAgICAgIChjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBjaGlsZE93bmVyICsgXCIuXCIpKTtcbiAgICAgICAgdmFyIHByZXZHZXRDdXJyZW50U3RhY2sgPSBSZWFjdFNoYXJlZEludGVybmFscy5nZXRDdXJyZW50U3RhY2s7XG4gICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLmdldEN1cnJlbnRTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlKTtcbiAgICAgICAgICBwcmV2R2V0Q3VycmVudFN0YWNrICYmIChzdGFjayArPSBwcmV2R2V0Q3VycmVudFN0YWNrKCkgfHwgXCJcIik7XG4gICAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdC5kZXYvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICBwYXJlbnRUeXBlLFxuICAgICAgICAgIGNoaWxkT3duZXJcbiAgICAgICAgKTtcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuZ2V0Q3VycmVudFN0YWNrID0gcHJldkdldEN1cnJlbnRTdGFjaztcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9IFwiXCIsXG4gICAgICAgIG93bmVyID0gZ2V0T3duZXIoKTtcbiAgICAgIG93bmVyICYmXG4gICAgICAgIChvd25lciA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShvd25lci50eXBlKSkgJiZcbiAgICAgICAgKGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGBcIiArIG93bmVyICsgXCJgLlwiKTtcbiAgICAgIGluZm8gfHxcbiAgICAgICAgKChwYXJlbnRUeXBlID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHBhcmVudFR5cGUpKSAmJlxuICAgICAgICAgIChpbmZvID1cbiAgICAgICAgICAgIFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnRUeXBlICsgXCI+LlwiKSk7XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG4gICAgZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICAgICAgdmFyIGVzY2FwZXJMb29rdXAgPSB7IFwiPVwiOiBcIj0wXCIsIFwiOlwiOiBcIj0yXCIgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwiJFwiICtcbiAgICAgICAga2V5LnJlcGxhY2UoL1s9Ol0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlbGVtZW50ICYmXG4gICAgICAgIG51bGwgIT09IGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPSBlbGVtZW50LmtleVxuICAgICAgICA/IChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KSwgZXNjYXBlKFwiXCIgKyBlbGVtZW50LmtleSkpXG4gICAgICAgIDogaW5kZXgudG9TdHJpbmcoMzYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wJDEoKSB7fVxuICAgIGZ1bmN0aW9uIHJlc29sdmVUaGVuYWJsZSh0aGVuYWJsZSkge1xuICAgICAgc3dpdGNoICh0aGVuYWJsZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgY2FzZSBcInJlamVjdGVkXCI6XG4gICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoZW5hYmxlLnN0YXR1c1xuICAgICAgICAgICAgICA/IHRoZW5hYmxlLnRoZW4obm9vcCQxLCBub29wJDEpXG4gICAgICAgICAgICAgIDogKCh0aGVuYWJsZS5zdGF0dXMgPSBcInBlbmRpbmdcIiksXG4gICAgICAgICAgICAgICAgdGhlbmFibGUudGhlbihcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmdWxmaWxsZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAodGhlbmFibGUudmFsdWUgPSBmdWxmaWxsZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcInJlamVjdGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS5yZWFzb24gPSBlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgdGhlbmFibGUuc3RhdHVzKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gdGhlbmFibGUudmFsdWU7XG4gICAgICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHRoZW5hYmxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcbiAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlIHx8IFwiYm9vbGVhblwiID09PSB0eXBlKSBjaGlsZHJlbiA9IG51bGw7XG4gICAgICB2YXIgaW52b2tlQ2FsbGJhY2sgPSAhMTtcbiAgICAgIGlmIChudWxsID09PSBjaGlsZHJlbikgaW52b2tlQ2FsbGJhY2sgPSAhMDtcbiAgICAgIGVsc2VcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW4uX2luaXQpLFxuICAgICAgICAgICAgICAgICAgbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayhjaGlsZHJlbi5fcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW47XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2soaW52b2tlQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2hpbGRLZXkgPVxuICAgICAgICAgIFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiICsgZ2V0RWxlbWVudEtleShpbnZva2VDYWxsYmFjaywgMCkgOiBuYW1lU29GYXI7XG4gICAgICAgIGlzQXJyYXlJbXBsKGNhbGxiYWNrKVxuICAgICAgICAgID8gKChlc2NhcGVkUHJlZml4ID0gXCJcIiksXG4gICAgICAgICAgICBudWxsICE9IGNoaWxkS2V5ICYmXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID1cbiAgICAgICAgICAgICAgICBjaGlsZEtleS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCBcIiQmL1wiKSArIFwiL1wiKSxcbiAgICAgICAgICAgIG1hcEludG9BcnJheShjYWxsYmFjaywgYXJyYXksIGVzY2FwZWRQcmVmaXgsIFwiXCIsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBudWxsICE9IGNhbGxiYWNrICYmXG4gICAgICAgICAgICAoaXNWYWxpZEVsZW1lbnQoY2FsbGJhY2spICYmXG4gICAgICAgICAgICAgIChudWxsICE9IGNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgICgoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpIHx8XG4gICAgICAgICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNhbGxiYWNrLmtleSkpLFxuICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeCA9IGNsb25lQW5kUmVwbGFjZUtleShcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIChudWxsID09IGNhbGxiYWNrLmtleSB8fFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICYmIGludm9rZUNhbGxiYWNrLmtleSA9PT0gY2FsbGJhY2sua2V5KVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIiArIGNhbGxiYWNrLmtleSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIkJi9cIlxuICAgICAgICAgICAgICAgICAgICAgICkgKyBcIi9cIikgK1xuICAgICAgICAgICAgICAgICAgY2hpbGRLZXlcbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIFwiXCIgIT09IG5hbWVTb0ZhciAmJlxuICAgICAgICAgICAgICAgIG51bGwgIT0gaW52b2tlQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgICBpc1ZhbGlkRWxlbWVudChpbnZva2VDYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgICBudWxsID09IGludm9rZUNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrLl9zdG9yZSAmJlxuICAgICAgICAgICAgICAgICFpbnZva2VDYWxsYmFjay5fc3RvcmUudmFsaWRhdGVkICYmXG4gICAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXguX3N0b3JlLnZhbGlkYXRlZCA9IDIpLFxuICAgICAgICAgICAgICAoY2FsbGJhY2sgPSBlc2NhcGVkUHJlZml4KSksXG4gICAgICAgICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKSk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaW52b2tlQ2FsbGJhY2sgPSAwO1xuICAgICAgY2hpbGRLZXkgPSBcIlwiID09PSBuYW1lU29GYXIgPyBcIi5cIiA6IG5hbWVTb0ZhciArIFwiOlwiO1xuICAgICAgaWYgKGlzQXJyYXlJbXBsKGNoaWxkcmVuKSlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcbiAgICAgICAgICAobmFtZVNvRmFyID0gY2hpbGRyZW5baV0pLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKSksXG4gICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgKz0gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICAgKSk7XG4gICAgICBlbHNlIGlmICgoKGkgPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKSksIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGkpKVxuICAgICAgICBmb3IgKFxuICAgICAgICAgIGkgPT09IGNoaWxkcmVuLmVudHJpZXMgJiZcbiAgICAgICAgICAgIChkaWRXYXJuQWJvdXRNYXBzIHx8XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBcIlVzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgPSAhMCkpLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBpLmNhbGwoY2hpbGRyZW4pLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgIShuYW1lU29GYXIgPSBjaGlsZHJlbi5uZXh0KCkpLmRvbmU7XG5cbiAgICAgICAgKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBuYW1lU29GYXIudmFsdWUpLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKyspKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKFwib2JqZWN0XCIgPT09IHR5cGUpIHtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGNoaWxkcmVuLnRoZW4pXG4gICAgICAgICAgcmV0dXJuIG1hcEludG9BcnJheShcbiAgICAgICAgICAgIHJlc29sdmVUaGVuYWJsZShjaGlsZHJlbiksXG4gICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICk7XG4gICAgICAgIGFycmF5ID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICtcbiAgICAgICAgICAgIChcIltvYmplY3QgT2JqZWN0XVwiID09PSBhcnJheVxuICAgICAgICAgICAgICA/IFwib2JqZWN0IHdpdGgga2V5cyB7XCIgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbihcIiwgXCIpICsgXCJ9XCJcbiAgICAgICAgICAgICAgOiBhcnJheSkgK1xuICAgICAgICAgICAgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjaztcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICAgIGlmIChudWxsID09IGNoaWxkcmVuKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCBcIlwiLCBcIlwiLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gICAgICBpZiAoLTEgPT09IHBheWxvYWQuX3N0YXR1cykge1xuICAgICAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICAgICAgY3RvciA9IGN0b3IoKTtcbiAgICAgICAgY3Rvci50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICgwID09PSBwYXlsb2FkLl9zdGF0dXMgfHwgLTEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgICAgICAgKHBheWxvYWQuX3N0YXR1cyA9IDEpLCAocGF5bG9hZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMiksIChwYXlsb2FkLl9yZXN1bHQgPSBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzICYmXG4gICAgICAgICAgKChwYXlsb2FkLl9zdGF0dXMgPSAwKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGN0b3IpKTtcbiAgICAgIH1cbiAgICAgIGlmICgxID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQpLFxuICAgICAgICAgIHZvaWQgMCA9PT0gY3RvciAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5EaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0P1wiLFxuICAgICAgICAgICAgICBjdG9yXG4gICAgICAgICAgICApLFxuICAgICAgICAgIFwiZGVmYXVsdFwiIGluIGN0b3IgfHxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwibGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICBjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL015Q29tcG9uZW50JykpXCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgY3Rvci5kZWZhdWx0XG4gICAgICAgICk7XG4gICAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5IO1xuICAgICAgbnVsbCA9PT0gZGlzcGF0Y2hlciAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICAgICAgaWYgKG51bGwgPT09IGVucXVldWVUYXNrSW1wbClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmVxdWlyZVN0cmluZyA9IChcInJlcXVpcmVcIiArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgICAgIGVucXVldWVUYXNrSW1wbCA9IChtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddKS5jYWxsKFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgXCJ0aW1lcnNcIlxuICAgICAgICAgICkuc2V0SW1tZWRpYXRlO1xuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAhMSA9PT0gZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgKChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9ICEwKSxcbiAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIE1lc3NhZ2VDaGFubmVsICYmXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh2b2lkIDApO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFnZ3JlZ2F0ZUVycm9ycyhlcnJvcnMpIHtcbiAgICAgIHJldHVybiAxIDwgZXJyb3JzLmxlbmd0aCAmJiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBBZ2dyZWdhdGVFcnJvclxuICAgICAgICA/IG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMpXG4gICAgICAgIDogZXJyb3JzWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKSB7XG4gICAgICBwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIllvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gXCJcbiAgICAgICAgKTtcbiAgICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcXVldWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZTtcbiAgICAgIGlmIChudWxsICE9PSBxdWV1ZSlcbiAgICAgICAgaWYgKDAgIT09IHF1ZXVlLmxlbmd0aClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBudWxsO1xuICAgICAgMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGhcbiAgICAgICAgPyAoKHF1ZXVlID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgcmVqZWN0KHF1ZXVlKSlcbiAgICAgICAgOiByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSAhMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlID0gITE7XG4gICAgICAgICAgICAgIHZhciBjb250aW51YXRpb24gPSBjYWxsYmFjayghMSk7XG4gICAgICAgICAgICAgIGlmIChudWxsICE9PSBjb250aW51YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuZGlkVXNlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgcXVldWVbaV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250aW51YXRpb247XG4gICAgICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgICAgIH0gd2hpbGUgKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpICsgMSksIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpc0ZsdXNoaW5nID0gITE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnRyYW5zaXRpb25hbC5lbGVtZW50XCIpLFxuICAgICAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLFxuICAgICAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxcbiAgICAgIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksXG4gICAgICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xuICAgIFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbiAgICB2YXIgUkVBQ1RfQ09OU1VNRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb25zdW1lclwiKSxcbiAgICAgIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLFxuICAgICAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksXG4gICAgICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxcbiAgICAgIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLFxuICAgICAgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksXG4gICAgICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIiksXG4gICAgICBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3IsXG4gICAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fSxcbiAgICAgIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwiZm9yY2VVcGRhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcInJlcGxhY2VTdGF0ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJzZXRTdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sXG4gICAgICBlbXB0eU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiICE9PSB0eXBlb2YgcGFydGlhbFN0YXRlICYmXG4gICAgICAgIFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHBhcnRpYWxTdGF0ZSAmJlxuICAgICAgICBudWxsICE9IHBhcnRpYWxTdGF0ZVxuICAgICAgKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiXG4gICAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIFwic2V0U3RhdGVcIik7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCBcImZvcmNlVXBkYXRlXCIpO1xuICAgIH07XG4gICAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgICBpc01vdW50ZWQ6IFtcbiAgICAgICAgICBcImlzTW91bnRlZFwiLFxuICAgICAgICAgIFwiSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXCJcbiAgICAgICAgXSxcbiAgICAgICAgcmVwbGFjZVN0YXRlOiBbXG4gICAgICAgICAgXCJyZXBsYWNlU3RhdGVcIixcbiAgICAgICAgICBcIlJlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGZuTmFtZTtcbiAgICBmb3IgKGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcylcbiAgICAgIGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkgJiZcbiAgICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgICBkZXByZWNhdGVkQVBJcyA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG4gICAgZGVwcmVjYXRlZEFQSXMuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuICAgIGFzc2lnbihkZXByZWNhdGVkQVBJcywgQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gICAgZGVwcmVjYXRlZEFQSXMuaXNQdXJlUmVhY3RDb21wb25lbnQgPSAhMDtcbiAgICB2YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5LFxuICAgICAgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSQyID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIiksXG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgICAgICAgSDogbnVsbCxcbiAgICAgICAgQTogbnVsbCxcbiAgICAgICAgVDogbnVsbCxcbiAgICAgICAgUzogbnVsbCxcbiAgICAgICAgYWN0UXVldWU6IG51bGwsXG4gICAgICAgIGlzQmF0Y2hpbmdMZWdhY3k6ICExLFxuICAgICAgICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogITEsXG4gICAgICAgIGRpZFVzZVByb21pc2U6ICExLFxuICAgICAgICB0aHJvd25FcnJvcnM6IFtdLFxuICAgICAgICBnZXRDdXJyZW50U3RhY2s6IG51bGxcbiAgICAgIH0sXG4gICAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICBSRUFDVF9DTElFTlRfUkVGRVJFTkNFJDEgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKSxcbiAgICAgIGRpc2FibGVkRGVwdGggPSAwLFxuICAgICAgcHJldkxvZyxcbiAgICAgIHByZXZJbmZvLFxuICAgICAgcHJldldhcm4sXG4gICAgICBwcmV2RXJyb3IsXG4gICAgICBwcmV2R3JvdXAsXG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQsXG4gICAgICBwcmV2R3JvdXBFbmQ7XG4gICAgZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gITA7XG4gICAgdmFyIHByZWZpeCxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHJlZW50cnkgPSAhMTtcbiAgICB2YXIgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyAoXG4gICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBXZWFrTWFwID8gV2Vha01hcCA6IE1hcFxuICAgICkoKTtcbiAgICB2YXIgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpLFxuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sXG4gICAgICBkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lO1xuICAgIHZhciBkaWRXYXJuQWJvdXRFbGVtZW50UmVmID0ge307XG4gICAgdmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9LFxuICAgICAgZGlkV2FybkFib3V0TWFwcyA9ICExLFxuICAgICAgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nLFxuICAgICAgcmVwb3J0R2xvYmFsRXJyb3IgPVxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXBvcnRFcnJvclxuICAgICAgICAgID8gcmVwb3J0RXJyb3JcbiAgICAgICAgICA6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHdpbmRvdyAmJlxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHdpbmRvdy5FcnJvckV2ZW50XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyB3aW5kb3cuRXJyb3JFdmVudChcImVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgIDogU3RyaW5nKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpKSByZXR1cm47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHByb2Nlc3MgJiZcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBwcm9jZXNzLmVtaXRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KFwidW5jYXVnaHRFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9ICExLFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbCxcbiAgICAgIGFjdFNjb3BlRGVwdGggPSAwLFxuICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSAhMSxcbiAgICAgIGlzRmx1c2hpbmcgPSAhMSxcbiAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MgPVxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBxdWV1ZU1pY3JvdGFza1xuICAgICAgICAgID8gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVldWVNaWNyb3Rhc2soY2FsbGJhY2spO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IGVucXVldWVUYXNrO1xuICAgIGV4cG9ydHMuQ2hpbGRyZW4gPSB7XG4gICAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgICAgICAgbWFwQ2hpbGRyZW4oXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvckVhY2hDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9LFxuICAgICAgdG9BcnJheTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH0pIHx8IFtdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgb25seTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKVxuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgIGV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICBleHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICBleHBvcnRzLl9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERSA9XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscztcbiAgICBleHBvcnRzLmFjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIHByZXZBY3RRdWV1ZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlLFxuICAgICAgICBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgICBhY3RTY29wZURlcHRoKys7XG4gICAgICB2YXIgcXVldWUgPSAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPVxuICAgICAgICAgIG51bGwgIT09IHByZXZBY3RRdWV1ZSA/IHByZXZBY3RRdWV1ZSA6IFtdKSxcbiAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITE7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgIChwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKSxcbiAgICAgICAgICAoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgbnVsbCAhPT0gcmVzdWx0ICYmXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiByZXN1bHQgJiZcbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmVzdWx0LnRoZW5cbiAgICAgICkge1xuICAgICAgICB2YXIgdGhlbmFibGUgPSByZXN1bHQ7XG4gICAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCB8fFxuICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICgoZGlkV2Fybk5vQXdhaXRBY3QgPSAhMCksXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIllvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsIGludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciBzY29wZXMuIFlvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTtcIlxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCA9ICEwO1xuICAgICAgICAgICAgdGhlbmFibGUudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHByZXZBY3RTY29wZURlcHRoKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yJDIpIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IkMik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aHJvd25FcnJvciA9IGFnZ3JlZ2F0ZUVycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChfdGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gKChlcnJvciA9IGFnZ3JlZ2F0ZUVycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcikpXG4gICAgICAgICAgICAgICAgICA6IHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIHJldHVyblZhbHVlJGpzY29tcCQwID0gcmVzdWx0O1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aCAmJlxuICAgICAgICAoZmx1c2hBY3RRdWV1ZShxdWV1ZSksXG4gICAgICAgIDAgIT09IHF1ZXVlLmxlbmd0aCAmJlxuICAgICAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0IHx8XG4gICAgICAgICAgICAgICgoZGlkV2Fybk5vQXdhaXRBY3QgPSAhMCksXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJBIGNvbXBvbmVudCBzdXNwZW5kZWQgaW5zaWRlIGFuIGBhY3RgIHNjb3BlLCBidXQgdGhlIGBhY3RgIGNhbGwgd2FzIG5vdCBhd2FpdGVkLiBXaGVuIHRlc3RpbmcgUmVhY3QgY29tcG9uZW50cyB0aGF0IGRlcGVuZCBvbiBhc3luY2hyb25vdXMgZGF0YSwgeW91IG11c3QgYXdhaXQgdGhlIHJlc3VsdDpcXG5cXG5hd2FpdCBhY3QoKCkgPT4gLi4uKVwiXG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBudWxsKSk7XG4gICAgICBpZiAoMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGgpXG4gICAgICAgIHRocm93IChcbiAgICAgICAgICAoKGNhbGxiYWNrID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgY2FsbGJhY2spXG4gICAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgMCA9PT0gcHJldkFjdFNjb3BlRGVwdGhcbiAgICAgICAgICAgID8gKChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IHF1ZXVlKSxcbiAgICAgICAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUkanNjb21wJDAsXG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IHJlc29sdmUocmV0dXJuVmFsdWUkanNjb21wJDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5jYWNoZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgaWYgKG51bGwgPT09IGVsZW1lbnQgfHwgdm9pZCAwID09PSBlbGVtZW50KVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIlRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgK1xuICAgICAgICAgICAgZWxlbWVudCArXG4gICAgICAgICAgICBcIi5cIlxuICAgICAgICApO1xuICAgICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKSxcbiAgICAgICAga2V5ID0gZWxlbWVudC5rZXksXG4gICAgICAgIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICBpZiAobnVsbCAhPSBjb25maWcpIHtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdDtcbiAgICAgICAgYToge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBcInJlZlwiKSAmJlxuICAgICAgICAgICAgKEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgXCJyZWZcIlxuICAgICAgICAgICAgKS5nZXQpICYmXG4gICAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQuaXNSZWFjdFdhcm5pbmdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICExO1xuICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gdm9pZCAwICE9PSBjb25maWcucmVmO1xuICAgICAgICB9XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCAmJiAob3duZXIgPSBnZXRPd25lcigpKTtcbiAgICAgICAgaGFzVmFsaWRLZXkoY29uZmlnKSAmJlxuICAgICAgICAgIChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpLCAoa2V5ID0gXCJcIiArIGNvbmZpZy5rZXkpKTtcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpXG4gICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgfHxcbiAgICAgICAgICAgIFwia2V5XCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc2VsZlwiID09PSBwcm9wTmFtZSB8fFxuICAgICAgICAgICAgXCJfX3NvdXJjZVwiID09PSBwcm9wTmFtZSB8fFxuICAgICAgICAgICAgKFwicmVmXCIgPT09IHByb3BOYW1lICYmIHZvaWQgMCA9PT0gY29uZmlnLnJlZikgfHxcbiAgICAgICAgICAgIChwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgaWYgKDEgPT09IHByb3BOYW1lKSBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgZWxzZSBpZiAoMSA8IHByb3BOYW1lKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IEFycmF5KHByb3BOYW1lKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wTmFtZTsgaSsrKVxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdFtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHZvaWQgMCwgdm9pZCAwLCBvd25lciwgcHJvcHMpO1xuICAgICAgZm9yIChrZXkgPSAyOyBrZXkgPCBhcmd1bWVudHMubGVuZ3RoOyBrZXkrKylcbiAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2tleV0sIHByb3BzLnR5cGUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24gKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAgICAgUHJvdmlkZXI6IG51bGwsXG4gICAgICAgIENvbnN1bWVyOiBudWxsXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLlByb3ZpZGVyID0gZGVmYXVsdFZhbHVlO1xuICAgICAgZGVmYXVsdFZhbHVlLkNvbnN1bWVyID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OU1VNRVJfVFlQRSxcbiAgICAgICAgX2NvbnRleHQ6IGRlZmF1bHRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGRlZmF1bHRWYWx1ZS5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICAgIGRlZmF1bHRWYWx1ZS5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpXG4gICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaSA9IFwiXCI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2b2lkIDAgPT09IHR5cGUgfHxcbiAgICAgICAgICAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUgJiZcbiAgICAgICAgICAgIG51bGwgIT09IHR5cGUgJiZcbiAgICAgICAgICAgIDAgPT09IE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aClcbiAgICAgICAgKVxuICAgICAgICAgIGkgKz1cbiAgICAgICAgICAgIFwiIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlIGl0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgICAgaWYgKG51bGwgPT09IHR5cGUpIHZhciB0eXBlU3RyaW5nID0gXCJudWxsXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBpc0FycmF5SW1wbCh0eXBlKVxuICAgICAgICAgICAgPyAodHlwZVN0cmluZyA9IFwiYXJyYXlcIilcbiAgICAgICAgICAgIDogdm9pZCAwICE9PSB0eXBlICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxuICAgICAgICAgICAgICA/ICgodHlwZVN0cmluZyA9XG4gICAgICAgICAgICAgICAgICBcIjxcIiArXG4gICAgICAgICAgICAgICAgICAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgXCJVbmtub3duXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiIC8+XCIpLFxuICAgICAgICAgICAgICAgIChpID1cbiAgICAgICAgICAgICAgICAgIFwiIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/XCIpKVxuICAgICAgICAgICAgICA6ICh0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGUpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKSBidXQgZ290OiAlcy4lc1wiLFxuICAgICAgICAgIHR5cGVTdHJpbmcsXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BOYW1lO1xuICAgICAgaSA9IHt9O1xuICAgICAgdHlwZVN0cmluZyA9IG51bGw7XG4gICAgICBpZiAobnVsbCAhPSBjb25maWcpXG4gICAgICAgIGZvciAocHJvcE5hbWUgaW4gKGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWUgfHxcbiAgICAgICAgICAhKFwiX19zZWxmXCIgaW4gY29uZmlnKSB8fFxuICAgICAgICAgIFwia2V5XCIgaW4gY29uZmlnIHx8XG4gICAgICAgICAgKChkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lID0gITApLFxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiWW91ciBhcHAgKG9yIG9uZSBvZiBpdHMgZGVwZW5kZW5jaWVzKSBpcyB1c2luZyBhbiBvdXRkYXRlZCBKU1ggdHJhbnNmb3JtLiBVcGRhdGUgdG8gdGhlIG1vZGVybiBKU1ggdHJhbnNmb3JtIGZvciBmYXN0ZXIgcGVyZm9ybWFuY2U6IGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvbmV3LWpzeC10cmFuc2Zvcm1cIlxuICAgICAgICAgICkpLFxuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksICh0eXBlU3RyaW5nID0gXCJcIiArIGNvbmZpZy5rZXkpKSxcbiAgICAgICAgY29uZmlnKSlcbiAgICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmXG4gICAgICAgICAgICBcImtleVwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgXCJfX3NlbGZcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIFwiX19zb3VyY2VcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIChpW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gY2hpbGRyZW5MZW5ndGgpIGkuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgIGVsc2UgaWYgKDEgPCBjaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpLCBfaSA9IDA7XG4gICAgICAgICAgX2kgPCBjaGlsZHJlbkxlbmd0aDtcbiAgICAgICAgICBfaSsrXG4gICAgICAgIClcbiAgICAgICAgICBjaGlsZEFycmF5W19pXSA9IGFyZ3VtZW50c1tfaSArIDJdO1xuICAgICAgICBPYmplY3QuZnJlZXplICYmIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICAgIGkuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpXG4gICAgICAgIGZvciAocHJvcE5hbWUgaW4gKChjaGlsZHJlbkxlbmd0aCA9IHR5cGUuZGVmYXVsdFByb3BzKSwgY2hpbGRyZW5MZW5ndGgpKVxuICAgICAgICAgIHZvaWQgMCA9PT0gaVtwcm9wTmFtZV0gJiYgKGlbcHJvcE5hbWVdID0gY2hpbGRyZW5MZW5ndGhbcHJvcE5hbWVdKTtcbiAgICAgIHR5cGVTdHJpbmcgJiZcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIoXG4gICAgICAgICAgaSxcbiAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlXG4gICAgICAgICAgICA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IFwiVW5rbm93blwiXG4gICAgICAgICAgICA6IHR5cGVcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwgdHlwZVN0cmluZywgdm9pZCAwLCB2b2lkIDAsIGdldE93bmVyKCksIGkpO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVmT2JqZWN0ID0geyBjdXJyZW50OiBudWxsIH07XG4gICAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICAgICAgcmV0dXJuIHJlZk9iamVjdDtcbiAgICB9O1xuICAgIGV4cG9ydHMuZm9yd2FyZFJlZiA9IGZ1bmN0aW9uIChyZW5kZXIpIHtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFXG4gICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlIG1lbW8oZm9yd2FyZFJlZiguLi4pKS5cIlxuICAgICAgICAgIClcbiAgICAgICAgOiBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLlwiLFxuICAgICAgICAgICAgICBudWxsID09PSByZW5kZXIgPyBcIm51bGxcIiA6IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDAgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIDIgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlc1wiLFxuICAgICAgICAgICAgICAxID09PSByZW5kZXIubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBcIkRpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj9cIlxuICAgICAgICAgICAgICAgIDogXCJBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXCJcbiAgICAgICAgICAgICk7XG4gICAgICBudWxsICE9IHJlbmRlciAmJlxuICAgICAgICBudWxsICE9IHJlbmRlci5kZWZhdWx0UHJvcHMgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcImZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBkZWZhdWx0UHJvcHMuIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/XCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IHsgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsIHJlbmRlcjogcmVuZGVyIH0sXG4gICAgICAgIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICByZW5kZXIubmFtZSB8fFxuICAgICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbmRlciwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAocmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlbGVtZW50VHlwZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbiAgICBleHBvcnRzLmxhenkgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICAgICAgX3BheWxvYWQ6IHsgX3N0YXR1czogLTEsIF9yZXN1bHQ6IGN0b3IgfSxcbiAgICAgICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMubWVtbyA9IGZ1bmN0aW9uICh0eXBlLCBjb21wYXJlKSB7XG4gICAgICBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkgfHxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIm1lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1wiLFxuICAgICAgICAgIG51bGwgPT09IHR5cGUgPyBcIm51bGxcIiA6IHR5cGVvZiB0eXBlXG4gICAgICAgICk7XG4gICAgICBjb21wYXJlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjb21wYXJlOiB2b2lkIDAgPT09IGNvbXBhcmUgPyBudWxsIDogY29tcGFyZVxuICAgICAgfTtcbiAgICAgIHZhciBvd25OYW1lO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXBhcmUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICB0eXBlLm5hbWUgfHxcbiAgICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAodHlwZS5kaXNwbGF5TmFtZSA9IG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdFNoYXJlZEludGVybmFscy5ULFxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbiA9IHt9O1xuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCA9IGN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBzY29wZSgpLFxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUztcbiAgICAgICAgbnVsbCAhPT0gb25TdGFydFRyYW5zaXRpb25GaW5pc2ggJiZcbiAgICAgICAgICBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaChjdXJyZW50VHJhbnNpdGlvbiwgcmV0dXJuVmFsdWUpO1xuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUgJiZcbiAgICAgICAgICBudWxsICE9PSByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gJiZcbiAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKG5vb3AsIHJlcG9ydEdsb2JhbEVycm9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcG9ydEdsb2JhbEVycm9yKGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIG51bGwgPT09IHByZXZUcmFuc2l0aW9uICYmXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgJiZcbiAgICAgICAgICAoKHNjb3BlID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZSksXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKSxcbiAgICAgICAgICAxMCA8IHNjb3BlICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiBJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiBPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuXCJcbiAgICAgICAgICAgICkpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5UID0gcHJldlRyYW5zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy51bnN0YWJsZV91c2VDYWNoZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWNoZVJlZnJlc2goKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlID0gZnVuY3Rpb24gKHVzYWJsZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlKHVzYWJsZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUFjdGlvblN0YXRlID0gZnVuY3Rpb24gKGFjdGlvbiwgaW5pdGlhbFN0YXRlLCBwZXJtYWxpbmspIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUFjdGlvblN0YXRlKFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgcGVybWFsaW5rXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDb250ZXh0ID0gZnVuY3Rpb24gKENvbnRleHQpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICAgIENvbnRleHQuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlNVTUVSX1RZUEUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGNhdXNlIGJ1Z3MuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VEZWZlcnJlZFZhbHVlKHZhbHVlLCBpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VFZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJZCgpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gZnVuY3Rpb24gKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VNZW1vID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VPcHRpbWlzdGljID0gZnVuY3Rpb24gKHBhc3N0aHJvdWdoLCByZWR1Y2VyKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VPcHRpbWlzdGljKHBhc3N0aHJvdWdoLCByZWR1Y2VyKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlUmVkdWNlciA9IGZ1bmN0aW9uIChyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VSZWYgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlU3RhdGUgPSBmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZ1bmN0aW9uIChcbiAgICAgIHN1YnNjcmliZSxcbiAgICAgIGdldFNuYXBzaG90LFxuICAgICAgZ2V0U2VydmVyU25hcHNob3RcbiAgICApIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIGdldFNuYXBzaG90LFxuICAgICAgICBnZXRTZXJ2ZXJTbmFwc2hvdFxuICAgICAgKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVRyYW5zaXRpb24oKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudmVyc2lvbiA9IFwiMTkuMC4wXCI7XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AoRXJyb3IoKSk7XG4gIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIixudWxsXSwibmFtZXMiOlsicmVhY3RNb2R1bGUiLCJyZXF1aXJlJCQxIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBV0EsRUFDRSxFQUFDLFlBQVk7RUFDZixNQUFJLFNBQVMsd0JBQXdCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtVQUNsRCxN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
