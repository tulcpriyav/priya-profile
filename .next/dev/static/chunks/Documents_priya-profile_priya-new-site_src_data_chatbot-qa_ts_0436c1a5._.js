(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/src/data/chatbot-qa.ts [app-client] (ecmascript, async loader)',
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        [
          'static/chunks/Documents_priya-profile_priya-new-site_src_data_chatbot-qa_ts_c98fb827._.js',
          'static/chunks/Documents_priya-profile_priya-new-site_src_data_chatbot-qa_ts_dc511f8b._.js',
        ].map((chunk) => __turbopack_context__.l(chunk)),
      ).then(() => {
        return parentImport(
          '[project]/Documents/priya-profile/priya-new-site/src/data/chatbot-qa.ts [app-client] (ecmascript)',
        );
      });
    });
  },
]);
